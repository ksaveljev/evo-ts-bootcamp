import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import nasa, { NasaResponse } from '../../api/nasa';

export type Status = 'idle' | 'loading';

export type PhotoId = number;

export type RoverPhoto = {
    id: PhotoId;
    imgSrc: string;
    roverName: string;
    cameraFullName: string;
};

export type MarsViewerState = {
    status: Status;
    selectedSol: number;
    sols: { [key: number]: PhotoId[] };
    photos: RoverPhoto[];
};

const initialState: MarsViewerState = {
    status: 'idle',
    selectedSol: 1,
    sols: {},
    photos: []
};

export const fetchSol = createAsyncThunk(
    'mars/fetchSol',
    async (sol: number, { dispatch }) => {
        const response = await nasa.get<NasaResponse>('/', { params: { sol } });
        const { photos } = response.data;
        const roverPhotos: RoverPhoto[] = photos.map((p) => ({
            id: p.id,
            imgSrc: p.img_src,
            roverName: p.rover.name,
            cameraFullName: p.camera.full_name
        }));
        const roverPhotoIds = photos.map((p) => p.id);
        dispatch(addPhotos(roverPhotos));
        dispatch(addDays({ sol, photos: roverPhotoIds }));
        return response.data;
    }
);

export const marsSlice = createSlice({
    name: 'mars',
    initialState,
    reducers: {
        addPhotos: (state, action: PayloadAction<RoverPhoto[]>) => {
            state.photos.push(...action.payload);
        },
        addDays: (state, action: PayloadAction<{ sol: number; photos: PhotoId[] }>) => {
            const { sol, photos } = action.payload;
            state.sols[sol] = photos;
        },
        changeSelectedSol: (state, action: PayloadAction<number>) => {
            state.selectedSol = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSol.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSol.fulfilled, (state) => {
            state.status = 'idle';
        });
    },
});

export const { addPhotos, addDays, changeSelectedSol } = marsSlice.actions;

export const selectSelectedSol = (state: RootState) => state.mars.selectedSol;
export const selectStatus = (state: RootState) => state.mars.status;
export const selectSols = (state: RootState) => state.mars.sols;
export const selectPhotos = (state: RootState) => state.mars.photos;

export default marsSlice.reducer;
