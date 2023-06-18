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

