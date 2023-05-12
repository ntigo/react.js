# Chapter 06. State와 생명주기

## state란?
---
 - state는 컴포넌트의 `현재 상황에 대한 정보를 나타내기 위해 리액트에서 쓰는 일반 자바스크립트 객체`
 - 컴포넌트 내에서 지속적으로 변경이 일어나는 값을 관리하기 위해 사용
 - 차이점은 일반 변수는 함수가 종료될 때 사라지지만 `state 변수는 리액트에 의해 보존
 - `KeyPoint` 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 한다는 점

## state의 특징
```react
class LikeButton extends React.Component {
	constructor(props) {
    	super(props);
        
        this.state = {
        	liked : false
        };
        
    }
}
```
 - `클래스 컴포넌트`의 경우는 state를 생성자 부분에서 정의
 - 반대로 `함수 컴포넌트`는 State를  useState라는 Hook을 통해서 정의

```react
//state를 직접 수정 
this.state = {
	name: 'seeyou'
};

// setState 함수를 통한 수정 (정상적인 사용법)
// setState({
	name: 'seeyou'
});
```
 - State 값을 직접 변경하게 되면 React가 `Component를 다시 렌더링 할 타이밍을 알아차리지 못한다`

## 리액트 컴포넌트 생명주기
---

 - 리액트 컴포넌트에는 `라이프사이클(수명 주기)`이 존재
 - 컴포넌트의 수명은 `페이지에 렌더링되기 전인 준비과정`에서 시작하여 `페이지에서 사라질 때` 끝난다.

 ![](2023-05-09-23-28-25.png)


 - `constructor()`: State 데이터를 초기화하는 메소드
 - `render()`: 클래스 컴포넌트에서 반드시 구현되어야 하는 메소드
 - `componentDidMount()`: 컴포넌트가 마운트 된 직후 호출되는 메소드
 - `componentDidUpdate()`: 업데이트가 진행된 직후에 호출되는 메소드
 - `componentWillUnmount()`: 컴포넌트가 DOM 상에서 제거될 때에 호출되는 메소드

mount
 - 컴포넌트가 생성되는 시점
 - componentDidMount()

updating 
 - 컴포넌트의 props가 변경될 때
 - setState()함수 호출에 의해 state가 변경될 때
 - forceUpdate()라는 강제 업데이트 함수가 호출될 때
 - componentDidUpdate()

unmounting
 - 상위 컴포넌트에서 현재 컴포넌트를 더 이상 화면에 표시하지 않게 될 때
 - ComponentWillUnmount()

```react
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      console.log("componentDidMount() called");
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
      console.log("componentWillUnmount() called");
    }
  
    tick() {
        this.setState({
            date: new Date()
            });
      console.log("setState() called");
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
                <h2>현재 시간 : {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }
  
  export default Clock;
  ```

 ## 정리
 ---

 - state가 변경될 때 컴포넌트가 재랜더링 되며 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함 시켜서 사용
 - state를 변경하고자 할 때는 setState() 함수를 무조건 사용해서 변경
 - 생명주기 함수는 지금은 거의 사용하지 않는 클래스 컴포넌트의 기능이지만 컴포넌트가 마운트 되고 업데이트를 거쳐서 언마이트 되기까지의 흐름에 대한 확실한 이해