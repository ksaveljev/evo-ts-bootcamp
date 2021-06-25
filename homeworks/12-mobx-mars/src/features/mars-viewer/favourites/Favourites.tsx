import React from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../stores";
import { PhotoGrid } from "../photo-grid/PhotoGrid";

export const Favourites: React.FC = observer(() => {
    const store = useStore("Favourites");

    return (
        <PhotoGrid
            photos={store.favouritePhotos}
            noPhotos="No favourites photos, add some!"
        />
    )
});
