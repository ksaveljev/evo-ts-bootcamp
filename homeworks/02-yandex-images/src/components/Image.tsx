import React from 'react';
import styled from 'styled-components';

type ImageProps = {
    image: string;
};

type ImageState = {
    width: number;
    height: number;
};

const Div = styled.div<ImageState>`
    margin: 2px;
    background-color: violet;
    position: relative;
    width: ${props => Math.floor(props.width*200/props.height)}px;
    flex-grow: ${props => Math.floor(props.width*200/props.height)}
`;

const I = styled.i<ImageState>`
    display: block;
    padding-bottom: ${props => Math.floor(props.height/props.width*100)}%
`;

const Img = styled.img`
    position: absolute;
    top: 0;
    width: 100%;
    vertical-align: bottom;
`;

class Image extends React.Component<ImageProps, ImageState> {
    private readonly imageRef: React.RefObject<HTMLImageElement>;
    state = { width: 0, height: 0 };

    constructor(props: ImageProps) {
        super(props);
        this.imageRef = React.createRef();
    }

    onLoad = () => {
        const img = this.imageRef.current;
        this.setState({
            width: img?.naturalWidth || 0,
            height: img?.naturalHeight || 0
        });
    };

    public render(): React.ReactNode {
        return (
            <Div {...this.state}>
                <I {...this.state} />
                <Img onLoad={this.onLoad} ref={this.imageRef} src={this.props.image} alt="i am an image" />
            </Div>
        );
    }
}

export default Image;
