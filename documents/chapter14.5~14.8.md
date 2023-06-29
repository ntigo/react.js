# Context

## 1. context란
`context`란 ` component`에게 `props`를 사용하지 않고 필요한 데이터를 넘겨 사용할 수 있게 해준다. 

## 2. context를 사용해야 할때
1. context는 모든 component에서 데이터를 전달 할때 유용하다(예:테마, 사용자 정보, 로컬라이징 등)
2. 데이터는 자주 업데이트 할 필요가 없는 context에 위치하여야 한다(리액트 context는 component를 위한 전역변수)

## 3. 리액트 context가 해결해주는 문제
리액트의 context는 `props drilling`을 막는 데 도음을 준다
```
Props drilling이란 중첩된 여러 계층의 컴포넌트에게 props를 전달해주느 것을 의미한다.
```

```jsx
export default function App({ theme }) {
  return (
    <>
      <Header theme={theme} />
      <Main theme={theme} />
      <Sidebar theme={theme} />
      <Footer theme={theme} />
    </>
  );
}
function Header({ theme }) {
  return (
    <>
      <User theme={theme} />
      <Login theme={theme} />
      <Menu theme={theme} />
    </>
  );
}
// 해당 소스의 문제는 theme를 사용하진 않는 컴포넌트들에게 해당 props를 내려주고 있다.
```

## 4. 다중 context 사용 하기
다중 context를 동시 사용 하려면 `Context.Provider`를 중첩 하면 사용 가능하다

```jsx
class ReactMultiContext extends React.Component {
    render () {
        const { user, theme } = this.props;
        return (
            //Context.Provider를 중첩 하여 자식 컴퍼넌트인 Layout을 감싸줌
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={user}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

```


## 4. useContext 
useContext 훅을 사용 해 render pops를 사용하는 대신, context를 사용할 수 있다

```jsx
export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <User />
    </UserContext.Provider>
  )
}
function User() {
  // 바른 사용법  
  const value = React.useContext(UserContext);  

  // 잘못된 사용법, 훅을 사용 시 파라미터로 컨텍스트 객체를 넣어줘야함
  React.useContext(UserContext.Consumer);  
  return <h1>{value}</h1>;
}
```
