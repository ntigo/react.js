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
[2] CSS만을 `재사용`하기 어렵습니다.<br/>
[3] 리렌더링시 항상 CSS도 함께 렌더링됩니다.<br/>
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
### 1. `CSS Module`이란?
: CSS를 `모듈화`하여 사용하는 방식입니다. 
<br/><br/>

### 2. CSS Module `장점`(특징)
[1] 클래스명의 `전역 오염을 방지`합니다.<br/>
[2] 복잡한 클래스명을 사용할 필요없으며, `개발 및 유지보수가 용이`합니다.<br/>
<br/>

### 3. CSS Module `단점`
[1] 동적인 클래스명을 사용시 `의도하지 않은 클래스명(false)`이 렌더링될 수 있습니다.<br/>
[2] 다중 클래스명을 사용시 가독성이 떨어집니다.<br/>
```css
/* css파일 생성시 확장자 앞에 ".module"을 추가한 후 사용합니다. */
.title {
    color: orange;
    font-size: 50px;
    font-weight: 800;
}
.sub_title {
    font-size: 24px;
    font-weight: 600
}
.contents {
    font-size: 20px;
    color: green;
    font-weight: 600;
}
.blue {
    color: blue;
}
```
```jsx
import Style from "./CssModule.module.css";

//...

const [toggle, setToggle] = useState(true);

// "Style.클래스명"과 같이 사용합니다.
<div className={Style.title}>CSS Module!!</div>
// 다중 클래스명은 템플릿 리터럴을 통해 사용합니다.
<div className={`${Style.sub_title} ${Style.blue}`}>Is sub-title!</div>
// 동적 클래스명은 논리 연산자를 통해 사용합니다.
<div className={toggle && Style.contents}>Contents blahblah~</div>
```
<br/><br/>

## Part Ⅳ. antd
### 1. `antd`란?
: 리액트의 UI 라이브러리로써 미리 구현한 다양한 컴포넌트들을 제공합니다.
<br/><br/>

### 2. antd `장점`(특징)
[1] 실무에 적용 가능한 `높은 수준의 컴포넌트`를 제공합니다.<br/>
[2] 컴포넌트를 포함하여 아이콘 등 `다양한 디자인 요소`를 제공합니다.<br/>
[3] `다양한 예제`를 제공합니다.<br/>
<br/>

### 3. antd `단점`
[1] 컴포넌트의 `기능을 파악`하는데 `오랜 시간`이 걸립니다.<br/>
[2] 컴포넌트를 `커스터마이징`하기 어렵습니다.<br/>
<br/>

### 4. Ant Design 공식 홈페이지
: https://ant.design/<br/>
=> 참고 : https://www.w3schools.com/typescript/