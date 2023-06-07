

  function Parent(props) {
    return <Child name={props.name} />;
  }


  function Child(props) {
    return <GrandChild name={props.name} />;
  }

  function GrandChild(props) {
    return <h1>{props.name}</h1>;
  }
  
  function App() {
    return <Parent name="React" />;
  }
  
export default App;