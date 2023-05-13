import React from 'react'

class LifeStyle extends React.Component {
        state = { 
            count: 0,
        };

    counter = () =>{
        this.setState({ count: this.state.count + 1 });     
      }
  
    componentDidMount() {
      this.timer = setInterval(this.counter, 1000);
      console.log('componentDidMount() called');
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate() called from: ', prevState.count);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount() called");
        clearInterval(this.timer);
    }
    
  
    render() {
        return  (
            <h1>  count : { this.state.count }</h1>
        ) 
    }
  }

  export default LifeStyle;