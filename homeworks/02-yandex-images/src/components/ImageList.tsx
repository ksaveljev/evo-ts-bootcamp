import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import {PixabayImageData} from '../api/pixabay';

type ImageListProps = {
    images: PixabayImageData[];
};

const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    &::after {
        content: '';
        flex-grow: 999999999;
    }
`;

const ImageList: React.FunctionComponent<ImageListProps> = ({images}) => {
    return (
        <Section>
            {images.map((image) => {
                return <Image key={image.id} image={image.largeImageURL} />
            })}
        </Section>
    );
}

export default ImageList;
