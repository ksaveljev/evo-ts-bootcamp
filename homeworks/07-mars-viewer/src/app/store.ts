import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import routeReducer from '../features/routes/routesSlice';
import marsReducer from '../features/mars-viewer/marsSlice';
import favouritesReducer from '../features/mars-viewer/favourites/favouritesSlice';

export const store = configureStore({
  reducer: {
    routes: routeReducer,
    mars: marsReducer,
    favourites: favouritesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
