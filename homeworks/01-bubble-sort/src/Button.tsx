import React, { MouseEvent } from 'react';

type ButtonProps = {
    text: string;
    disabled?: boolean;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

class Button extends React.Component<ButtonProps> {
    public render(): React.ReactNode {
        return (
            <button
                onClick={(e) => this.props.onClick(e)}
                disabled={this.props.disabled || false}
            >
                {this.props.text}
            </button>
        );
    }
}

export default Button;
