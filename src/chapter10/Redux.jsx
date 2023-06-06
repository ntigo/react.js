import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Actions
const UPDATE_NAME = 'UPDATE_NAME';
const updateName = name => ({
  type: UPDATE_NAME,
  payload: name,
});

// Reducer
const initialState = {
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

// Components
function GrandChild() {
  // Use Redux state
  const name = useSelector(state => state.name);
  return <h1>{name}</h1>;
}

function Child() {
  return <GrandChild />;
}

function Parent() {
  // Use Redux action
  const dispatch = useDispatch();
  
  // Simulate name update
  React.useEffect(() => {
    dispatch(updateName("React"));
  }, [dispatch]);

  return <Child />;
}

function App() {
  return (
    <Provider store={store}>
      <Parent />
    </Provider>
  );
}

export default App


