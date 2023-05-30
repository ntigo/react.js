import React from 'react';

class ButtonTest01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: true };

        // callback 에서 this를 사용 바인딩 필수
        this.Action = this.Action.bind(this);
    }

    Action() {
        this.setState(p => ({
            isChecked: !p.isChecked
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
export default ButtonTest01;