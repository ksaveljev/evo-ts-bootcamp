import React from 'react';
import { createSelector } from '@reduxjs/toolkit';

import { PhotoGrid } from '../photo-grid/PhotoGrid';
import { useAppSelector } from '../../../app/hooks';
import { selectPhotoIds } from './favouritesSlice';
import { selectPhotos } from '../marsSlice';

export const Favourites: React.FC = () => {
    const photosSelector = createSelector(
        selectPhotoIds,
        selectPhotos,
        (photoIds, photos) => {
            return photos.filter((p) => photoIds.includes(p.id));
        }
    );

    const photos = useAppSelector(photosSelector);

    return (
        <PhotoGrid
            photos={photos}
            onEmpty="No favourites photos, add some!"
        />
    )
};
