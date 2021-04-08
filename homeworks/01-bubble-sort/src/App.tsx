import React from 'react';
import './App.css';
import Header from './Header';
import Visualization from './Visualization';
import ControlPanel from './ControlPanel';
import Status from './Status';
import {SortingStepStatus, generateRandomArray, bubbleSortStep} from './utils';
import {ExecutionState, SortingStatus} from './Types';

const STEP_INTERVAL_MS = 100;

type AppProps = {
};

type AppState = {
    executionState: ExecutionState,
    sortingStatus: SortingStatus,
    array: number[]
};

class App extends React.Component<AppProps, AppState> {
    private executionTimer: NodeJS.Timer | undefined;

    constructor(props: AppProps) {
        super(props);
        this.state = this.resetState();
    }

    private resetState(): AppState {
        return {
            executionState: ExecutionState.NOT_RUNNING,
            sortingStatus: SortingStatus.NOT_SOLVED,
            array: generateRandomArray(30)
        };
    }

    private resetSorting(): void {
        this.pauseSorting();
        this.setState(this.resetState());
    }

    private startSorting(): void {
        if (this.state.executionState === ExecutionState.NOT_RUNNING) {
            this.setState({ executionState: ExecutionState.RUNNING });
            this.executionTimer = setInterval(() => this.makeStep(), STEP_INTERVAL_MS);
        }
    }

    private makeStep() {
        const [status, newArray] = bubbleSortStep(this.state.array);
        if (status === SortingStepStatus.NOTHING_TO_SORT) {
            this.pauseSorting();
            this.setState({
                executionState: ExecutionState.NOT_RUNNING,
                sortingStatus: SortingStatus.SOLVED
            });
        } else {
            this.setState({ array: newArray });
        }
    }

    private pauseSorting(): void {
        this.setState({ executionState: ExecutionState.NOT_RUNNING });
        if (this.executionTimer) {
            clearInterval(this.executionTimer);
        }
    }

    public render(): React.ReactNode {
        return (
            <div className="App">
                <Header />
                <Visualization array={this.state.array} />
                <ControlPanel
                    resetSortingFn={this.resetSorting.bind(this)}
                    startSortingFn={this.startSorting.bind(this)}
                    pauseSortingFn={this.pauseSorting.bind(this)}
                    executionState={this.state.executionState}
                    sortingStatus={this.state.sortingStatus}
                />
                <Status sortingStatus={this.state.sortingStatus}/>
            </div>
        );
    }
}

export default App;
