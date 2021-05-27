import React from 'react';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { addToFavourites, removeFromFavourites } from '../favourites/favouritesSlice';
import { selectPhotoIds } from '../favourites/favouritesSlice';
import { PhotoId } from '../marsSlice'
import style from './Heart.module.css';

export type HeartProps = {
    photoId: PhotoId;
};

export const Heart: React.FC<HeartProps> = ({ photoId }) => {
    const dispatch = useAppDispatch();

    const favourites = useAppSelector(selectPhotoIds);
    const isFavourite = favourites.includes(photoId);

    const action = isFavourite ? removeFromFavourites : addToFavourites;
    const opacity = isFavourite ? style.opaque : style.transparent;

    return (
        <svg onClick={() => dispatch(action(photoId))} className={`${style.heart} ${opacity}`} width="98" height="89" viewBox="0 0 98 89" fill="none" xmlns="http://www.w3.org/2000/svg" opacity="0.7"><path d="M89.834 48.974L48.81 8.95 7.786 48.974 48.81 89l41.023-40.026z" fill="#E30A17"></path><path d="M59.467 29.381c0 16.022-13.312 29.01-29.733 29.01C13.311 58.391 0 45.403 0 29.381 0 13.36 13.312.371 29.733.371c16.422 0 29.734 12.989 29.734 29.01z" fill="#E30A17"></path><path d="M98 29.01c0 16.022-13.312 29.01-29.734 29.01-16.42 0-29.733-12.988-29.733-29.01C38.533 12.988 51.845 0 68.266 0 84.688 0 98 12.988 98 29.01z" fill="#E30A17"></path></svg>
    );
};
