import React from 'react';

class ButtonTest02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: true };
    }

    Action = () => {
        this.setState((p) => ({
            isChecked: !p.isChecked,
        }));
    }

    render() {
        return (
            <button onClick={this.Action}>
                {this.state.isChecked ? 'AAAAA' : 'BBBBB'}
            </button>
        );
    }
}
export default ButtonTest02;