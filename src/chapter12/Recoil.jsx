import React from 'react';
import { RecoilRoot, atom, useRecoilState } from 'recoil';

// Atom
const nameState = atom({
  key: 'nameState', // unique ID (with respect to other atoms/selectors)
  default: 'React', // default value (aka initial value)
});

// Components
function GrandChild() {
  // Use Recoil state
  const [name] = useRecoilState(nameState);
  return <h1>{name}</h1>;
}

function Child() {
  return <GrandChild />;
}

function Parent() {
  return <Child />;
}

function App() {
  return (
    <RecoilRoot>
      <Parent />
    </RecoilRoot>
  );
}

export default App;
