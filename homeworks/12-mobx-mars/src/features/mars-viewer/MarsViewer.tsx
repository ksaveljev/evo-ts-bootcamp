import React from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "../../stores";
import { Route } from "../../stores/RouterStore";
import { Photos } from "./photos/Photos";
import { Favourites } from "./favourites/Favourites";

export const MarsViewer: React.FC = observer(() => {
    const store = useStore("Router");
    const selectedRoute = store.selectedRoute;

    const renderer: { [key in Route]: JSX.Element } = {
        photos: <Photos />,
        favourites: <Favourites />
    }

    return renderer[selectedRoute];
});
