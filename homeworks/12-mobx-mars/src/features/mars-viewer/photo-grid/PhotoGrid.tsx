import React from "react";

import { RoverPhoto } from "../../../stores/MarsViewerStore";
import { Photo } from "./Photo";
import style from "./PhotoGrid.module.css";

export type PhotoGridProps = {
    photos: RoverPhoto[];
    noPhotos: string;
};

export const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, noPhotos }) => {
    const renderGrid = () => {
        return (
            <div className={style.grid}>
                {photos.map((p) => {
                    return <Photo key={p.id} photo={p} />
                })}
            </div>
        );
    };

    return photos.length ? renderGrid() : <>{noPhotos}</>;
};
