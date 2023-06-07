import React, { createContext, useContext } from 'react';


// 1. Create a Context
const NameContext = createContext();

function GrandChild() {
  // 3. Use Context
  const name = useContext(NameContext);
  return <h1>{name}</h1>;
}

function Child() {
  return <GrandChild />;
}

function Parent() {
  return <Child />;
}

function App() {
  // 2. Provide the Context
  return (
    <NameContext.Provider value="React">
      <Parent />
    </NameContext.Provider>
  );
}

export  default App;
