import React from 'react';
import './Column.css';

type ColumnProps = {
    height: number;
}

const Column: React.FunctionComponent<ColumnProps> = ({height}) => {
    return <div className="Column" style={{height: `${height}px`}}></div>;
};

export default Column;
