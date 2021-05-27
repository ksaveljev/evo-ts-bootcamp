import React from 'react';
import { createSelector } from '@reduxjs/toolkit';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { PhotoGrid } from '../photo-grid/PhotoGrid';
import {
    selectSelectedSol,
    selectSols,
    selectPhotos,
    changeSelectedSol,
    fetchSol
} from '../marsSlice';
import style from './Photos.module.css';

export const Photos: React.FC = () => {
    const dispatch = useAppDispatch();
    const selectedSol = useAppSelector(selectSelectedSol);
    const photosSelector = createSelector(
        selectSelectedSol,
        selectSols,
        selectPhotos,
        (selectedSol, sols, photos) => {
            const photoIds = sols[selectedSol];
            if (photoIds === undefined) {
                return null;
            }

            return photos.filter((p) => photoIds.includes(p.id));
        }
    );
    const photos = useAppSelector(photosSelector);

    const updateSelectedSol = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            dispatch(changeSelectedSol(Number(event.target.value)));
        }
    };

    const renderPhotoGrid = () => {
        if (!photos) {
            return "Photos are not loaded";
        } else {
            return (
                <PhotoGrid
                    photos={photos}
                    onEmpty="No fotos for this sol :("
                />
            );
        }
    };

    return (
        <>
            <div className={style.viewer}>
                <p>Select Sol and press "load"!</p>
                <input className={style.sol} type="number" value={selectedSol} onChange={updateSelectedSol} />
                <button onClick={() => dispatch(fetchSol(selectedSol))}>load</button>
            </div>
            {renderPhotoGrid()}
        </>
    );
};
