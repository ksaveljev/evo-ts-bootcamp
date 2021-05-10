import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { Route } from '../routesSlice';
import { changeRoute, selectRoute } from '../routesSlice';
import style from './Link.module.css';

export type LinkProps = {
    name: Route;
};

export const Link: React.FC<LinkProps> = ({ name, children }) => {
    const selectedRoute = useAppSelector(selectRoute);
    const dispatch = useAppDispatch();

    const selected = selectedRoute === name;
    const className = selected ? style.selected : style.unselected;
    const onClick = selected ? undefined : () => dispatch(changeRoute(name));

    return (
        <span onClick={onClick} className={className}>{children}</span>
    );
};
