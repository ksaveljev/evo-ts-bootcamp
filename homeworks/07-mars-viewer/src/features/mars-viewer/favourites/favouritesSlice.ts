import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';
import { PhotoId } from '../marsSlice';

export type FavouritesState = {
    photoIds: PhotoId[];
};

const initialState: FavouritesState = {
    photoIds: []
};

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>) => {
            state.photoIds.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>) => {
            const index = state.photoIds.findIndex((id) => id === action.payload);
            if (index !== -1) {
                state.photoIds.splice(index, 1);
            }
        }
    }
});

export const { add: addToFavourites, remove: removeFromFavourites } = favouritesSlice.actions;

export const selectPhotoIds = (state: RootState) => state.favourites.photoIds;

export default favouritesSlice.reducer;
