import React from 'react';

class ButtonTest03 extends React.Component {
    
    Action = () => {
        console.log("test : ", this);
    }

    render() {
        return (
            <button onClick={() => this.Action()}>
                {this.state.isChecked ? 'AAAAA' : 'BBBBB'}
            </button>
        );
    }
}
export default ButtonTest03;