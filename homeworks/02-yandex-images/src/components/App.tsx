import React from 'react';
import styled from 'styled-components';
import pixabay, {PixabayResponse, PixabayImageData} from '../api/pixabay';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

type AppProps = {
};

type AppState = {
    images: PixabayImageData[]
};

const Div = styled.div`
    margin-top: 20px;
`;

class App extends React.Component<AppProps, AppState> {
    state = { images: [] };

    onSearchSubmit = async (term: string): Promise<void> => {
        const response = await pixabay.get<PixabayResponse>('/', { params: { q: term } });
        this.setState({ images: response.data.hits });
    };

    public render(): React.ReactNode {
        return (
            <Div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </Div>
        );
    }
}

export default App;
