import React from 'react';
import { Link } from './link/Link';
import style from './Routes.module.css';

export const Routes: React.FC = () => {
    return (
        <p className={style.router}>
            <Link name='photos'>
                Photos
            </Link>

            <> | </>

            <Link name='favourites'>
                Favourites
            </Link>
        </p>
    );
};
