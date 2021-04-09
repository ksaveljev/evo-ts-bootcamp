import axios from 'axios';

const MINIMUM_IMAGES = 25;
const MAXIMUM_IMAGES = 50;

export type PixabayImageData = {
    id: number;
    largeImageURL: string;
};

export type PixabayResponse = {
    hits: PixabayImageData[];
};

export default axios.create({
    baseURL: 'https://pixabay.com/api/',
    params: {
        key: '21087678-8fdc664df07b58349e2e0715d',
        per_page: Math.floor(Math.random() * (MAXIMUM_IMAGES - MINIMUM_IMAGES + 1)) + MINIMUM_IMAGES
    }
});
