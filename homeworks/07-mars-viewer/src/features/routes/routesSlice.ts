import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export type Route = 'photos' | 'favourites';

export type RouterState = {
    selectedRoute: Route;
}

const initialState: RouterState = {
    selectedRoute: 'photos'
};

export const routesSlice = createSlice({
    name: 'routes',
    initialState,
    reducers: {
        changeRoute: (state, action: PayloadAction<Route>) => {
            state.selectedRoute = action.payload;
        }
    }
});

export const { changeRoute } = routesSlice.actions;

export const selectRoute = (state: RootState) => state.routes.selectedRoute;

export default routesSlice.reducer;
