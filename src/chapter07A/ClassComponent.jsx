import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('a');
    }

    componentDidMount() {
        console.log('b');
    }

    componentDidMount() {
        console.log('b');
    }

    render() {
        return (
          <div>클래스형 컴포넌트</div>
        );
    }
}

export default ClassComponent;