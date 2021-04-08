import React from 'react';
import {SortingStatus} from './Types';

type StatusProps = {
    sortingStatus: SortingStatus
};

const statusConfig: { [Key in SortingStatus]: string } = {
    [SortingStatus.SOLVED]: "Solved",
    [SortingStatus.NOT_SOLVED]: "Not solved"
};

const Status: React.FunctionComponent<StatusProps> = ({sortingStatus}) => {
    return <pre>{statusConfig[sortingStatus]}</pre>;
};

export default Status;
