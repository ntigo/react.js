# 컴포넌트란 
리액트는 컴포넌트 기반의 구조를 가지고 있습니다. 
컴포넌트는 레고 블록을 조립하듯 끼워 맞춰서 새로운 컴포넌트를 만들수 있습니다.
컴퍼넌트를 재사용할시 전체코드량이 줄어들고 개발시간과 유지보수 비용을 줄일수 있습니다. 

컴포넌트는 에서 입력은 props를 사용하고 출력은 리액트 엘리먼트가 됩니다. 
컴포넌트의 역활은 어떤한 속성을 입력받아 그에 맞는 리액트 앨리먼트를 생성하여 리턴해주는 것입니다

### 에어비앤비
https://www.airbnb.co.kr/

# props
props는 컴포넌트를 생성하기 위한 값입니다
props를 변경시에는 이미 컴포넌트는 생성이 되어있기 때문에 컴포넌트를 변경할수 없습니다 그래서 props가 변경될시 리랜더링이 발생합니다  
props에 중요한 특징은 읽기 전용입니다. 읽을수만있고 변경할수는 없습니다.  
  
리액트 공식문서에서는 컴포넌트의 특징으로 모든 리액트 컴포넌트는 그들의 proprs에 관해서는 pure 함수같은 역활을 해야한다.

pure한 함수
```js
function sum(a, b) {
  return a + b;
}
```

lmpure한 함수
```js
function withdraw(account, amount) {
  account.total -= amount;
}
```

리액트 컴포넌트의 props는 바꿀수 없고, 같은 props가 들어오면 같은 엘리먼트를 리턴해야한다.

props 값 전달
```js
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
```

props 기본값 지정
```js
function Avatar({ person, size = 100 }) {
  // ...
}
```



# 함수 컴포넌트
클래스 컴포넌트가 불편하여 나온 컴포넌트 장점은 간단하게 코드를 작성할수 있음

# 클래스 컴포넌트 
함수형 컴포넌트와의 차이점은 extends React.Component 상속한다는 점

# 컴포넌트 이름 규칙 
 컴포넌트의 이름은 항상 대문자로 시작되어야 합니다. 왜냐하면 
 리액트는 소문자로 시작하는 컴포넌트를 \<div>, \<span>같은 html 태그로 인식하기 때문입니다. 

# 컴포넌트 가져오기/내보내기
||Export statement|Import statement|
|---|---|---|
|Default|export default function Button() {}|import Button from './Button.js';|
|Named|export function Button() {}|import { Button } from './Button.js';|


# jsx 단일 규칙

1. 단일 루트 요소 반환  
구성 요소에서 여러 요소를 반환하려면 단일 상위 태그로 요소를 래핑합니다.
JSX는 HTML처럼 보이지만 내부적으로는 일반 JavaScript 객체로 변환됩니다.   
배열로 래핑하지 않고는 함수에서 두 객체를 반환할 수 없습니다. 


```js
React.createElement(
  type, // 태그 이름 문자열 | 리액트 컴포넌트 | React.Fragment
  [props], // 리액트 컴포넌트에 넣어주는 데이터 객체
  [ ... children] // 자식으로 넣어주는 요소들
);
```

```js
function MyComponent() {
  return (
    <>
      <h1>Hello, world!</h1>
      <p>Welcome to my app.</p>
    </>
  );
}
```

```js
function MyComponent() {
  return React.createElement(
    React.Fragment, // Fragment를 사용합니다.
    null,
    React.createElement(
      "h1",
      null,
      "Hello, world!"
    ),
    React.createElement(
      "p",
      null,
      "Welcome to my app."
    )
  );
}
```

# 컴포넌트 합성
여러개의 컴포넌트를 합쳐서 하나의 컴포넌트로 만드는 것

# 컴포넌트 추출
큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것

