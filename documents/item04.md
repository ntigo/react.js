[본 문서는 한빛미디어의 소플의 처음 만난 리액트 (저자 이인제)를 참고하여 정리된 문서입니다.]

# 1. 엘리먼트의 정의
엘리먼트는 React 앱의 가장 작은 단위입니다.<br>
리액트 엘리먼트는 화면에서 보이는것을 기술하며 화면에서 보이는 DOM엘리먼트가 만들어집니다<br>
브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다<br>
React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트합니다.
```
const element = <h1>Hello, world</h1>; //Item3 엘리먼트 생성
```
### 엘리먼트의 구조
리액트 엘리먼트는 자바스크립트 객체 형태로 존재 하며 아래의 구조를 가지고 있습니다
```
{// 타입이 문자열 
  type : 'button',
  props:{
    className: 'bg-green',
    children:{
      type: 'b',
      props:{
        children: 'Hello, element!'
         }
      }   
   }
}  
```

```
{// 타입이 컴포넌트 엘리먼트인  자바스크립트 객체
  type: Button,
  props: {
    color: 'green',
    children: 'Hello, element!'
    }
}    
```

### createElement() 파라미터 

```
React.createElement(
  type,
  [props],
  [...childeren]
)  
```
|파라미터|값|
|------|:---:|
|type | 문자열,리액트 컴포넌트|
|props|attributes(속성)|
|children|자식 엘리먼트|

### 엘리먼트의 특징
불변성
:엘리먼트 생성후에 Children이나 attributes를 바꿀수 없다

# 2. 엘리먼트 렌더링하기
엘리먼트를 생성한후 실제로 화면에 보여주기 위해서는 렌더링 과정을 거쳐야 합니다.

### [엘리먼트 렌더링] 

<img width="968" alt="스크린샷 2023-05-01 오후 11 26 50" src="https://user-images.githubusercontent.com/119731100/235675116-d6f7076b-ea92-45d8-b7d8-d123a26ccc12.png">

### [엘리먼트렌더링 업데이트]
<img width="968" alt="스크린샷" src="https://user-images.githubusercontent.com/119731100/235676309-815971b1-6066-44fd-b485-4fb3f29d9c4a.jpg">



# 3. 렌더링된 엘리먼트 업데이트하기

```
import React from "react";

function Clock(props) {
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
```
한번 렌더링된 엘리먼트는 새로운 엘리멘트를 생성해서 바꾸는 것입니다 (앞써 언급된 엘리먼트의 불변성 특징)

## 📋정리
아이템 초반부 엘리먼트는 리액의 가장 작은 단위라는 설명처럼 토대가 되는 기본적인 요소로 <br>
엘리먼트의 구조와 특징  첨부된 이미지와 함께 렌더링 되는 과정을 이해하시면 앞으로 이어지는 내용에 도움이 되실것 같습니다.
