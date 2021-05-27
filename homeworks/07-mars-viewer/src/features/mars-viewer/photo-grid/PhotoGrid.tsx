import React from 'react';

import { RoverPhoto } from '../marsSlice';
import { Photo } from './Photo';
import style from './PhotoGrid.module.css';

export type PhotoGridProps = {
    photos: RoverPhoto[];
    onEmpty: string;
};

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, onEmpty }) => {
    const renderGrid = () => {
        return (
            <div className={style.grid}>
                {photos.map((p) => {
                    return <Photo key={p.id} photo={p} />
                })}
            </div>
        );
    };

    return photos.length ? renderGrid() : <>{onEmpty}</>;
};
