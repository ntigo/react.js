import React from 'react';
import LifeStyle from './LifeStyle'

class App extends React.Component {
    state = { 
        isRunning: true 
    };

  stopCounter = () => {
      this.setState({ isRunning: false })
  }

  render() {
    return this.state.isRunning ? (
      <div className="App">
        <button onClick={this.stopCounter}>Stop the counter</button>

        <LifeStyle /> 
      </div>
    ) : null
  }
}

export default App;