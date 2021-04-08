import React from 'react';
import './Visualization.css';
import Column from './Column';

type VisualizationProps = {
    array: number[];
};

class Visualization extends React.Component<VisualizationProps> {
    public render(): React.ReactNode {
        return (
            <div className="Visualization">
                {
                    this.props.array.map((n, index) => {
                        return <Column key={index} height={n} />;
                    })
                }
            </div>
        );
    }
}

export default Visualization;
