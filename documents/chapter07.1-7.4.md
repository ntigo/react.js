<center>
<img src=./resources/soaple.jpg
width="170" height="200">
</center>

본 문서는 ``소플의 처음 만난 리액트 (저자 이인제) - 한빛미디어`` 출판물을 이용하여 저작물에 대한 온라인 매체 이용 규정을 준수하여 허용 범위내에서 사용되었습니다.

상기 저서는 한빛출판네트워크의 저작물을 이용한 저작물로 저작권 법에 의해 저작권 보호를 받습니다.

---

# Chapter 07. 훅(Hook)

## 훅이란?
---
Hook이 나오기 전 까지 값의 상태를 관리(state) 혹은 생명주기를 관리해 할 때 클래스형 컴포넌트를 사용해야 됬다.   
함수형 컴포넌트는 한번 호출되고 메모리상에서 사라지게 되어 상태값 접근과 라이프사이클 구현이 불가능했다.  

### 클래스형 컴포넌트의 문제점
1. 복잡한 컴포넌트들은 이해하기 어렵습니다.
2. 컴포넌트 사이에서 상태 로직을 재사용하기 어렵습니다.
3. constructor, this, binding 등 지켜야 할 규칙이 많아서 코드가 복잡하고 길어집니다.

> Hook은 React 버전 16.8부터 React 요소로 새로 추가되었습니다.  
> Hook을 이용하여 기존 Class 바탕의 코드를 작성할 필요 없이 상태 값과 여러 React의 기능을 사용할 수 있습니다.

## 훅 사용 규칙
1. 최상위(at the top level)에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
2. React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 됩니다.

## useState 
*컴포넌트의 상태를 관리할 수 있는 Hook*  
Hook을 통해 선언된 state는 컴포넌트가 다시 렌더링 되어도 값을 그대로 유지함
클래스형 컴포넌트에서 기본적으로 제공하는 state와 유사함 

> [state 변수명, 변수 갱신 함수] = useState(초기값)  
> ex) [count, setCount] = useState(0)

## useEffect
*함수 컴포넌트 내에서 side effects를 수행할 수 있게 해주는 Hook.*

React 컴포넌트 안에서 데이터를 가져오거나 구독하고, DOM을 직접 조작하는 작업 등의 동작을 “side effects”(또는 짧게 “effects”)라고 합니다.  
왜냐하면 이것은 다른 컴포넌트에 영향을 줄 수도 있고, 렌더링 과정에서는 구현할 수 없는 작업이기 때문입니다.  
클래스형 컴포넌트에서 제공하는 componentDidMount 나 componentDidUpdate, componentWillUnmount와 같은 목적으로 제공되지만, 하나의 API로 통합된 것입니다.

> useEffect(실행 함수, 의존성 배열(deps))  
> function : 실행하고자 하는 함수  
> deps : 배열 형태. function을 재실행시킬 조건.  
> deps에 특정값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트될 때 useEffect를 실행합니다.

## useMemo
*메모이제이션된 값을 반환하는 Hook*

Memo 는 "memoized" 를 의미하는데, 이전에 계산 한 값을 재사용한다는 의미를 가지고 있습니다.
고비용 계산의 반복을 줄여 속도를 향상시킨다.

### 주의
useMemo로 전달된 함수는 렌더링 중에 실행된다. 
그렇기 때문에 렌더링 중에는 하지 않는 것을 이 함수 내에서 하면 안된다.  
예를 들어, 사이드 이펙트(side effects)는 useEffect에서 하는 일이지 useMemo에서 하는 일이 아니다.  

> useMemo(생성 함수, 의존성 배열(deps))  
> function : 실행하고자 하는 함수  
> deps : 배열 형태. function을 재실행시킬 조건.  
> deps에 지정된 값이 업데이트될 때 다시 생성 함수를 실행하여 계산한다.
> deps에 지정된 값이 업데이트되지 않는다면, 이전 계산된 값을 반환한다.
