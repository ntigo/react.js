import React from "react"

// 함수형 
export default function Welcome(props) {

  let name = props.name;

  return <h1>Hello, {name}</h1>;
}

// 클래스형 
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
