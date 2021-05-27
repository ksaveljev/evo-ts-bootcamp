import axios from 'axios';

export type CameraData = {
    id: number;
    name: string;
    rover_id: number;
    full_name: string;
};

export type RoverData = {
    id: number;
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
};

export type MarsRoverPhoto = {
    camera: CameraData;
    earth_date: string;
    id: number;
    img_src: string;
    rover: RoverData;
    sol: number;
};

export type NasaResponse = {
    photos: MarsRoverPhoto[];
};

export default axios.create({
    baseURL: 'https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos',
    params: {
        api_key: 'pNandC4S8eFR86jJvA6hLGV0KaCLTA0U7YhXRC9j'
    }
});
