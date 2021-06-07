import React from "react";

import { RoverPhoto } from "../../../stores/MarsViewerStore";
import { Heart } from "./Heart";
import style from "./Photo.module.css";

export type PhotoProps = {
    photo: RoverPhoto;
};

export const Photo: React.FC<PhotoProps> = ({ photo }) => {
    return (
        <div className={style.container}>
            <Heart photoId={photo.id} />
            <img className={style.photo} src={photo.imgSrc} alt={photo.cameraFullName}/>
            <span className={style.description}>Rover: {photo.roverName}, Camera: {photo.cameraFullName}</span>
        </div>
    );
};

