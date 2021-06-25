import React from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../stores";
import { Status } from "../../../stores/MarsViewerStore";
import { PhotoGrid } from "../photo-grid/PhotoGrid";
import style from "./Photos.module.css";

export const Photos: React.FC = observer(() => {
    const store = useStore("MarsViewer");
    const photos = store.solPhotos;

    const updateSelectedSol = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            store.changeSelectedSol(Number(event.target.value));
        }
    };

    const renderPhotoGrid = () => {
        if (store.status === Status.LOADING) {
            return "Loading...";
        } else if (!photos) {
            return "Photos are not loaded";
        } else {
            return (
                <PhotoGrid
                    photos={photos}
                    noPhotos="No photos for this sol :("
                />
            );
        }
    };

    return (
        <>
            <div className={style.viewer}>
                <p>Select Sol and press "load"!</p>
                <input className={style.sol} type="number" value={store.selectedSol} onChange={updateSelectedSol} />
                <button onClick={() => store.fetchSol()} disabled={store.status === Status.LOADING}>load</button>
            </div>
            {renderPhotoGrid()}
        </>
    );
});
