import React from 'react';
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FuntionalComponent";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";

class App extends React.Component {
  render() {
      return (
          <div className="App">
              {/*<ClassComponent />*/}
              {/*<FunctionalComponent />*/}
              {/*<UseState />*/}
              {/*<UseEffect />*/}
              <UseMemo />
          </div>
      )
  }
}

export default App;