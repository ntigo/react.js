import { createContext, useState } from 'react';
import { useContext } from 'react';

const Context = createContext('createContext Value');

export default function App() {
    const [value, setValue] = useState('Context Value')
    return (
      <Context.Provider value={value}>
        <Context.Consumer>
            {value}
        </Context.Consumer>
        {/* <MyComponent /> */}
      </Context.Provider>
    );
  }

function MyComponent() {
    // useContext hook 사용
    const value = useContext(Context);
    return <span>{value}</span>;
  }