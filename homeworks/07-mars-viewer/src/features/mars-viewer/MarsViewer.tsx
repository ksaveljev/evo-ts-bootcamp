import React from 'react';

import { useAppSelector } from '../../app/hooks';
import { Route, selectRoute } from '../routes/routesSlice';
import { Photos } from './photos/Photos';
import { Favourites } from './favourites/Favourites';

export const MarsViewer: React.FC = () => {
    const selectedRoute = useAppSelector(selectRoute);

    const renderer: { [key in Route]: JSX.Element } = {
        photos: <Photos />,
        favourites: <Favourites />
    }

    return renderer[selectedRoute];
};
