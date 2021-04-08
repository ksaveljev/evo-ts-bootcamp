import React, { MouseEvent } from 'react';
import './ControlPanel.css';
import Button from './Button';
import {ExecutionState, SortingStatus} from './Types';

type ControlPanelProps = {
    resetFn: (event: MouseEvent<HTMLButtonElement>) => void;
    startSortingFn: (event: MouseEvent<HTMLButtonElement>) => void;
    pauseSortingFn: (event: MouseEvent<HTMLButtonElement>) => void;
    executionState: ExecutionState;
    sortingStatus: SortingStatus;
};

class ControlPanel extends React.Component<ControlPanelProps> {
    public render(): React.ReactNode {
        let executionButton: React.ReactNode;
        if (this.props.executionState === ExecutionState.RUNNING) {
            executionButton = <Button text="Pause" disabled={false} onClick={this.props.pauseSortingFn} />
        } else {
            const disabled = this.props.sortingStatus === SortingStatus.SOLVED;
            executionButton = <Button text="Start" disabled={disabled} onClick={this.props.startSortingFn} />
        }

        return (
            <div className="ControlPanel">
                <Button text="New set" disabled={false} onClick={this.props.resetFn} />
                { executionButton }
            </div>
        );
    }
}

export default ControlPanel;
