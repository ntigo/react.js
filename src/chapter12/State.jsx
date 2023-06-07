import React, { useState } from 'react';


function ChildOne({ name, onNameChange }) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={() => onNameChange('React')}>Change Name to React</button>
    </div>
  );
}

function ChildTwo({ name, onNameChange }) {
  return (
    <div>
      <h1>Hi, {name}</h1>
      <button onClick={() => onNameChange('Redux')}>Change Name to Redux</button>
    </div>
  );
}

function Parent() {
  const [name, setName] = useState('World');
  
  return (
    <div>
      <ChildOne name={name} onNameChange={setName} />
      <ChildTwo name={name} onNameChange={setName} />
    </div>
  );
}