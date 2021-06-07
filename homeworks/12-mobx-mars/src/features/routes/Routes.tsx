import React from "react";

import { Route } from "../../stores/RouterStore";
import { Link } from "./link/Link";
import style from "./Routes.module.css";

export const Routes: React.FC = () => {
    return (
        <p className={style.router}>
            <Link name={Route.PHOTOS}>
                Photos
            </Link>

            <> | </>

            <Link name={Route.FAVOURITES}>
                Favourites
            </Link>
        </p>
    );
};
