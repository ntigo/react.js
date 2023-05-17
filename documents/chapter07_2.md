<center>
<img src=./resources/soaple.jpg
width="170" height="200">
</center>

본 문서는 ``소플의 처음 만난 리액트 (저자 이인제) - 한빛미디어`` 출판물을 이용하여 저작물에 대한 온라인 매체 이용 규정을 준수하여 허용 범위내에서 사용되었습니다.

상기 저서는 한빛출판네트워크의 저작물을 이용한 저작물로 저작권 법에 의해 저작권 보호를 받습니다.

---

# Chapter 7 part 2

### useCallback 훅
컴포넌트에 메서드를 정의하면 랜더링이 발생할 때 해당 메서드가 새롭게 정의되는데, 이것으로 인해 불필요한 메서드 정의 작업이 매번 발생하게 됩니다.
useCallback 훅은 이것을 최적화하기 위해 메서드가 변경되어야 할 때 다시 정의되도록 합니다.

```jsx
// useCallback 사용 예시, param1, param2, anyParam 중 어떤 값이 변경되면 sample이 다시 정의된다. 
const testUseCallback = useCallback( () => {
    // param1, param2, anyParam 을 사용한 어떤 처리 
}, [param1, param2, anyParam] );
```

첫번째 인자는 실행될 메서드 이고
두번째 인자는 의존성 배열이며 값이 변경되었는지 확인할 변수를 적용합니다.

useCallback 으로 메서드가 새롭게 정의될 때 memoization 되어 메모리에 저장됩니다.
해당 메서드의 처리 결과를 미리 연산하고 저장하는것으로, 반복적인 연산 수행 시 더 빠른 연산을 기대할 수 있습니다.

[예제) chapter07 - UseCallback.jsx]

### useRef 훅
리액트 개발 시 DOM 객체에 직접 접근하고 싶을 수 있습니다. 이럴 때 useRef 훅을 사용하여 DOM 객체에 접근할 수 있습니다.
useRef 훅은 객체를 반환하며, 해당 객체의 current 속성으로 DOM 객체에 접근할 수 있습니다.

```jsx
// useRef 사용 예시
const testUseRef = useRef();
const testMethod = () => {
    testUseRef.current.value = "value";
}

return <input type="text" ref={testUseRef} />
```

DOM 객체가 마운트, 언마운트 될 때 특정 코드를 실행하기 위해서는 callback ref 를 사용해서 코드를 작성해야합니다.
아래와 같이 작성되면 처음 랜더링에서만 호출되고 이후로는 호출되지 않습니다.

```jsx
// usecallback ref 사용 예시
const domChange = useCallback((dom) => {
    // dom 을 사용한 어떤 처리
}, []);
<textarea ref={domChange}></textarea>
```

[예제) chapter07 - CallbackRef.jsx]

### 훅의 규칙

훅의 실행은 순서가 보장되어야하고 그렇지 않으면 컴포넌트의 state 값에 문제가 발생할 수 있습니다.
훅은 리액트 함수 컴포넌트 안에서 호출되어야합니다.

[예제) chapter07 - Rule.jsx]

### 커스텀 훅

리액트에서 제공한 훅이 아닌, 개발자가 작성한 훅을 커스텀 훅이라고 합니다.
커스텀 훅은 이름이 use 로 시작해야하고 훅 안에서 최소 1개 이상의 훅을 호출해야합니다.

커스텀 훅을 사용하면 중복 코드를 제거할 수 있고 재사용하여 유지 관리에 용이합니다.

[예제) chapter07 - CustomHook.jsx]


