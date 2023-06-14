# Chapter 14.1~14.4 컨텍스트

## 컨텍스트란?

 * context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공
  * 코드가 매우 깔끔해지고 데이터를 한 곳에서 관리하기 때문에 디버깅에 용이

   (props의 경우 애플리케이션 안의 여러 컴포넌트들에 데이터를 전달해줘야됨)

---
## 컨텍스트를 사용해야 되는 경우는?

 * React 컴포넌트 트리 안에서 전역적(global)이라고 볼 수 있는 데이터를 공유할 수 있도록 고안된 방법
 * 현재 로그인한 유저, 테마 ,선호하는 언어 등

 ```react
 import React from 'react';
export const UserContext = React.createContext();
export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <User />
    </UserContext.Provider>
  )
}
function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
      {/* prints: Reed */}
    </UserContext.Consumer>
  )
}
```
## 상태 관리와 context의 차이?
 * 상태 관리는 초기값을 저장, 현재 값을 읽고, 값을 업데이트 하는 것과 같이 시간이 지남에 따라 상태가 변경되는 방식을 의미
 * context는 실제로 어떤 것도 관리하고 있지 않음 (파이프와 같은 역할)
 * React의 useState와 useReducer, Redux 상태관리에 속함

---
## useContext 훅이란
 * 리액트 훅이 도입된 리액트 16.8부터는 useContext 훅을 사용해 context를 사용
 * render props를 사용하는 대신, context를 사용할 때 컴포넌트 최상단에서 React.useContext()에 전체 context 객체를 내려줌

---
## 컨텍스트를 사용하기 전에 고려해야될 사항?
 * context를 사용하면 컴포넌트를 재사용하기가 어려워짐
 * 여러 레벨에 걸쳐 props 넘기는 걸 대체하는 데에 context보다 컴포넌트 합성이 더 간단한 해결책

---
 ## 컨텍스트 API
 1. 액트의 빌트인 함수인 createContext를 가지고 컨텍스트 생성

```react
 import { createContext } from 'react';

const Context = createContext('Default Value');
```
2. Context.Provider 컴포넌트를 만들어서 해당 Context를 자식 컴포넌트 영역에서 사용
3. Consumer 컴포넌트는 말그대로 소비자로서, 데이터를 가지고 있는 부모컴포넌트 중에서 가장 가까이에 있는 Provider 컴포넌트가 전달하는 데이터를 이용하는 역할

```react
function Main() {
  const value = 'My Context Value';
  return (
    <Context.Provider value={value}>
      <Provider>
        <Consumer>
            {value => ...}
        </Consumer>
      </Provider>
    </Context.Provider>
  );
}
```

