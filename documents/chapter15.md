<center>
<img src=./resources/soaple.jpg
width="170" height="200">
</center>

본 문서는 ``소플의 처음 만난 리액트 (저자 이인제) - 한빛미디어`` 출판물을 이용하여 저작물에 대한 온라인 매체 이용 규정을 준수하여 허용 범위내에서 사용되었습니다.

상기 저서는 한빛출판네트워크의 저작물을 이용한 저작물로 저작권 법에 의해 저작권 보호를 받습니다.

---

# 스타일링

## 목차
### Part Ⅰ. CSS
### Part Ⅱ. styled-components
### Part Ⅲ. CSS Module
### Part Ⅳ. antd
<br/>

## Part Ⅰ. CSS (Cascading Style Sheets)
### 1. `CSS` 란?
: CSS는 HTML 문서의 스타일을 지정하는 데 사용하는 언어입니다.<br/>
=> 참고 : https://www.w3schools.com/css/
<br/><br/>

### 2. 리액트에서 `CSS`란?
: 리액트만의 특별한 CSS 적용 방식 존재하지 않습니다. 한 가지 주의할 점은 컴포넌트에 `클래스명`을 사용해서 CSS를 적용할 때, class 대신 `className`을 사용해야 한다는 것 입니다.
```jsx
<style>
.correct {
    color: blue;
    font-weight: 800;
}
.not_correct {
    color: red;
    font-weight: 800;
}
</style>

// ...

// 리액트에서는 class라는 프로퍼티 대신 className을 사용한다.
<div className={"correct"}>오류가 발생하지 않습니다.</div>
<div class={"not_correct"}>오류가 발생합니다.</div>
```
<br/><br/>

## Part Ⅱ. styled-components
### 1. `styled-components`란?
: 컴포넌트 내부에서 기존의 CSS 문법을 사용할 수 있도록 도와주는 라이브러리입니다.
<br/><br/>

### 2. styled-components `장점`(특징)
[1] `CSS 선택자 없이` 컴포넌트에 스타일을 적용할 수 있습니다.<br/>
[2] 라이브러리에 포함된 함수 및 메소드의 `결과 값이 리액트 컴포넌트`입니다.
<br/><br/>

### 3. styled-components `단점`
[1] CSS 문법과 기타 로직이 컴포넌트 내에서 혼재되어 `가독성`이 떨어집니다.<br/>
[2] CSS만을 `재사용`하기 어렵습니다.
```jsx
// 태그 함수 & 태그드 템플릿 리터럴
const Title = styled.h1`
    color: orange;
    font-style: oblique;
`;
const SubTitle = styled("h2")`
    color: blue;
    font-style: oblique;
`;
```
<br/><br/>

## Part Ⅲ. CSS Module


