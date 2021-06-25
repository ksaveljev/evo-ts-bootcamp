import React from "react";
import { observer } from "mobx-react-lite";

import { useStore } from "../../../stores";
import { Route } from "../../../stores/RouterStore";
import style from "./Link.module.css";

export type LinkProps = {
    name: Route;
};

export const Link: React.FC<LinkProps> = observer(({ name, children }) => {
    const store = useStore("Router");
    const selectedRoute = store.selectedRoute;

    const selected = selectedRoute === name;
    const className = selected ? style.selected : style.unselected;
    const onClick = selected ? undefined : () => store.changeRoute(name);

    return (
        <span onClick={onClick} className={className}>{children}</span>
    );
});
