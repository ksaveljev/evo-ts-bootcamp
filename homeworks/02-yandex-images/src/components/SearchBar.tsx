import React from 'react';

type SearchBarProps = {
    onSearchSubmit: (term: string) => Promise<void>;
};

type SearchBarState = {
    text: string;
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
    state = { text: '' };

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ text: event.target.value });
    };

    onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.text);
    };

    public render(): React.ReactNode {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.text}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
