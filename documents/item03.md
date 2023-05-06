[본 문서는 한빛미디어의 소플의 처음 만난 리액트 (저자 이인제)를 참고하여 정리된 문서입니다.]
# 1. JSX란
자바스크립트의 확장 문법 이라는 뜻으로 해석할 수있으며<br>
JSX(JavaScript XML)는 X는 JavaScript와 XML을 결합한 것으로,<br> React에서 UI를 구성하는 데 사용됩니다. 
JSX를 사용하면 HTML과 유사한 문법으로 UI를 작성할 수 있기 때문에 코드가 간결해지고 가독성이 향상됩니다.
```
const element = <h1>Hello, world!</h1>; // HTML<h1> 사용
```

# 2. JSX의 역할
JSX 코드는 `createElement() 함수`를 통해 내부적으로 XML/HTML 코드를 자바스크립트 코드로 변환됩니다. 
JSX 코드를 자바스크립트로 변환하는 이유는 브라우저에서 실행되는 자바스크립트 코드로 변환하여 효율적으로 렌더링하기 위함입니다.
```
// JSX문법으로 작성한 두 객체(엘리먼트)
const element = (
  <h1 className="greeting">
      Hello, world!
  </h1>
)  

const element = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!;
      )
```

```
// createElement() 함수 호출의 결과 자바스크립트 
const elemnet = {
    type: 'h1',
    props: {
        className:'greeting',
        children: 'Hello, world!'
   }
}   
```
# 3. JSX의 장점
### 3-1.코드가 간결해진다
JSX를 사용하면 HTML과 유사한 문법으로 UI를 작성할 수 있기 때문에 코드가 간결해집니다. 
JSX를 사용하면 복잡한 UI를 선언적으로 작성할 수 있으며, 코드의 가독성과 유지보수성을 높일 수 있습니다.
```
JSX 사용
<div> Hello, {name}</div>

JSX 사용 안함 파라미터사용
React.createElemet('div',null,`Hello, ${name}`);
```

### 3-2.injection Attack 해킹을방어한다
```
const title = response.potentiallyMaliciousInput;

const element = <h1>{title}</h1>;
```
괄호를 사용하여 변수를 임베딩 하고 기본적으로 ReactDOM은 렌더링 하기전 임베딩된 값을<br> 
모두 문자열로 변환하기때문에 명시적으로 선언 되지않은 값이 괄호 안에 들어갈수없습니다 

# 4. JSX 사용법 
### 4-1 모든 자바스크립트 문법을 지원한다
### 4-2 자바스크립트 코드 사용시 중괄로 { } 묶어서 사용 하면 된다
```
const name = {
    firstName: "유",
    lastName: "경호",
};

const element = <h1>성은 {name.firstName}이고,
이름은 {name.lastName} 입니다</h1>;
```
### 4-3 children을 정의 하려면 상위태그 하위태그를 감싸도록 하면 된다
JSX에서 HTML 태그를 반환할 때는 반드시 HTML 태그를 묶어주는 단 하나의 부모 태그가 있어야 합니다. 
이 부모 태그는 특정한 HTML 태그를 사용하지 않아도 되며, Fragment라는 빈 태그 모양을 사용할 수 있습니다.
```
return (
  <>
    <h1>Hello, world!</h1>
    <p>My name is Apple.</p>
  </>
)
```
## 📋정리
JSX는 자바스크립트문법을 기반으로 확장되어진 문법으로 위에서 나타나는 특징들과 JSX를 사용하기 위한 사용법(규칙)들을 <br>
다시한번 정리해보시면 리액트개발에 JSX문법을 사용하여 개발하는데 도움이 되실것 같습니다.

