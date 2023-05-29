# 리스트와 키

## 목차
<br>

## 1. 리액트에서 리스트 사용하기
### 1) 다양한 방식의 리스트 사용 방법
### 2) 실전에 적용하기
### - 우리는 어떻게 사용하고 있나?
### 3) 리스트 사용 방식 개선하기
## 2. 키를 생성하고 사용하기
### 1) 데이터에서 아이디 또는 유니크 값 추출하기
### 2) 인조 식별자 생성 및 사용
<br><br>

## 1. 리액트에서 리스트 사용하기
### 1) 다양한 방식의 리스트 사용 방법
- 반복문 사용하기
- forEach 함수 사용하기
- map 함수 사용하기

<br><br><br>
Conditional Rendering, 즉 **조건에 따른 렌더링**  
<br><br>

### ✅ 렌더링?

일반적으로 말하는 렌더링은 브라우저 로딩 과정의 일부입니다

브라우저는 웹 페이지를 보여줄 때

1. **파싱**: HTML을 파싱하여 DOM Tree를 생성하고 CSS를 해석해 CSSOM 트리를 구성하고
2. **스타일**: 생성된 DOM Tree와 CSSOM Tree로 스타일을 매칭시켜 Render Tree를 구성하고
3. **레이아웃**(Reflow): 레이아웃을 계산한 다음
4. **페인트**(Repaint): 렌더링 트리의 각 노드를 실제 픽셀로 변환하고
5. **합성**(Composite): 최종적으로 이 paint된 부분을 합치게 됩니다

이런 일련의 과정 중 `스타일 → 레이아웃 → 페인트 → 합성` 부분을 **렌더링**이라고 합니다  
<br><br>  

### ✅ 리액트에서 렌더링

'컴포넌트가 현 props와 state의 상태에 기초하여 UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업'  
<br>
컴포넌트의 루트에서 시작해서 내려가면서 Update할 컴포넌트를 찾아서 렌더링을 진행합니다  
<br>
렌더링될 컴포넌트를 어떻게 만드냐?

```jsx
function Component() {
    return <p>컴포넌트 정보</p>;
}
```

지금까지 했던 것 처럼 보통 JSX문법으로 엘리먼트의 정보 반환해서 엘리먼트를 생성하고,

가상DOM에서 변경된 내용만 실제 DOM에 적용해서 렌더링하게되죠  
<br><br>  

### ✅ 조건부 렌더링?

그럼 조건부 렌더링이란 뭘까요?

한마디로 조건에 따라 렌더링할 엘리먼트 정보를 바꿔주는 겁니다

결과물이 바뀌는거죠

```jsx
function Component() {
    return <p>컴포넌트 정보</p>;
}
```
<br>
즉, 조건문을 사용해서 Return 처리를 해주면 되는데, 이 때 자주쓰는 패턴들에 대해 알아봅시다
<br>
<br>  
<br>  

---

<br>  

## 리액트 if문 주요 작성패턴 3가지

<br>
어려운 말, 쓸데 없는 용어 정의 필요 없습니다, 그냥 이런 방식들이 있다 정도 알아두면 되는데요,

그냥 자바스크립트 문법으로 조건문 쓰는 것이기 때문입니다

크게 ‘문장’과 ‘표현식’을 사용할 때로 나뉘는데,

좀더 자세히 나눠서

1. 문장 (Statements)
2. 삼항연산자
3. &&

이 세 가지를 살펴봅시다  
<br>


### 1. return 밖에서 쓰는 ‘Statements’

말 그대로 return문 밖(JSX 밖)에서 조건문을 쓰는겁니다

```jsx
import { useState } from "react";
import './button.css';

function GoodOutOfReturn() {
    let [isGood, setGood] = useState(false);
    let heart;

    if(isGood){
        heart = <p>❤️</p>;
    }else{
        heart = <p>🤍</p>;
    }

    let toggleHeart = () => {
        setGood(!isGood);
    }

    return (
			  <button className="btn_outLine btn_whiteOutLine" type="button" onClick={toggleHeart}>
            {heart}
        </button>
    );
}

export default GoodOutOfReturn;
```

변수에 조건문에 따라 값을 할당해서 쓰면됩니다  
<br>
아주 간단한 내용이라면

```jsx
function Component(props) {
  if(props.isTrue){
    return <div>참일 때 보여줄 div</div>;
  }

  return null;
}
```

이런식으로 바로 반환해줘도 되겠죠?  
<br>

참고로 **null을 리턴하면 렌더링되지 않습니다**  
<br>

또, `switch문`도 자바스크립트 ‘문장’이니 당연히 이런식으로 return문 밖에서 쓸 수 있습니다

```jsx
function ReportNotice(props){
  const reportCd = props.report.reportCd;
	const reportNm = props.report.reportNm;

  switch (reportCd){
    case 'RPT_01' :
      return <span>{reportNm} 보고서 작성 시 서면 보고서도 제출해주세요.</span>
		default :
      return <span>{reportNm} 보고서를 선택하셨습니다.</span>
  }
}
```
<br>  
<br>
<br>  

### 2. return 안에서 쓰는 조건문 - 삼항연산자

<br>

방금 봤던 **`if문`, `switch문` 등의 Statements는 return () 안의 JSX 내에서는 사용 불가능**합니다

JavaScript  문장이지, JavaScript 표현식이 아니기 때문에 JSX 안에서 그대로 사용할 수 없기 때문이죠

**JavaScript 표현식만 JSX 내에서 사용 할 수 있습니다**

<aside>
💡 참고로 표현식은 쉽게말헤 ‘값’입니다. 
if문 같은 무언가를 수행하는 ‘문장’의 경우 값이 될 수 없죠, 함수의 인자로도, 대입할 때의 값으로도 사용할 수 없습니다

</aside>

<br>

```jsx
function Component() {
		return (
				if(true){
						<div>참일 때 보여줄 div</div>
				}
		)
}
```

이런게 안된다는 말입니다  
<br>

JSX 안에서 조건문을 쓰려면 다른 방식을 써야 합니다

대표적인게 삼항연산자(ternary operator)입니다

- 삼항연산자 문법
    
    **`조건문 ? 조건문 참일 때 실행할 코드 : 거짓일 때 실행할 코드`**
      
<br>

아까 코드를 JSX에서 삼항연산자를 쓰는 방식으로 바꿔보겠습니다

```jsx
import { useState } from "react";
import './button.css';

function GoodTenaryOperator() {
    let [isGood, setGood] = useState(false);

    let toggleHeart = () => {
        setGood(!isGood);
    }

    return (
        <button className="btn_outLine btn_whiteOutLine" type="button" onClick={toggleHeart}>
            {
                isGood ? <p>❤️</p> : <p>🤍</p>
            }
        </button>
    );
}

export default GoodTenaryOperator;
```

복잡한 조건이 아니라서 삼항연산자를 사용하니 훨씬 더 간결하고 가독성 좋게 읽힙니다  
<br>

당연히 중첩 사용도 됩니다

```jsx
function Component(props) {
  return (
    <div>
      {
        props.accountNo === 1
		        ? <div>1이면 보여줄 div</div>
		        : (
								props.accountNo === 2
			            ? <div>2이면 보여줄 div</div>
			            : <div>1도 2도 아니면 보여줄 div</div>
		          )
      }
    </div>
  )
}
```

하지만 복잡한 조건에선 가독성에 유의해야겠습니다  
<br>
<br>
<br>

### 3. return 안에서 쓰는 조건문 - && 연산자

- && 연산자 문법
    
    `값 && 값`
    
    ⇒ 그냥 `&&` 를 기준으로 **”왼쪽 오른쪽 둘다 true면 true로 표현해주세요” 라는 뜻**
    

```jsx
true && false;// => false
true && true;// => true
```
<br>
근데 `boolean`형이 아니라 다른 자료형을 넣으면 어떻게 될까요?

```jsx
true && '문자열';// => '문자열'
false && '문자열';// => false
true && false && '문자열';// => false
```

이렇게 되는 이유는

“&&연산자를 사용하는 경우,
<br>
&&연산자로 연결된 값 중 처음 나온 false 값을 표현하거나,
<br>
false 값이 나오지 않았다면 마지막 값을 남겨주기 때문”입니다  
<br>

그럼 렌더링되길 원하는 값을 &&연산자 묶음 맨 뒤에 붙여주면 되겠네요

```jsx
import { useState } from "react";
import './button.css';

function GoodAndAnd() {
    let [isGood, setGood] = useState(false);

    let toggleHeart = () => {
        setGood(!isGood);
    }

    return (
        <button className="btn_outLine btn_whiteOutLine" type="button" onClick={toggleHeart}>
            { isGood && <p>❤️</p> }
            { !isGood && <p>🤍</p> }
        </button>
    );
}

export default GoodAndAnd;
```

위 코드가 ‘좋아요’가 해제될 때도 jsx를 하얀 하트를 반환하기 때문에 이렇게 두 줄이지만
<br><br>
만약 참인 경우에만 보여주고 그렇지 않으면 아무것도 보여주지 않는 경우엔 삼항연산자보다 더 간단하게 쓸 수 있습니다

```jsx
{ isGood && <p>❤️</p> }
<=>
{ isGood ? <p>❤️</p> : null }
```
<br><br>
<aside>
💡 자바스크립트의 Truthy와 Falsy
<br>
: boolean값을 요구하는 부분에 들어가는 값을 true 혹은 false로  형변환
<br>
⇒ 조건부 렌더링 시 유의

</aside>
<br>

|Truthy             |Falsy        |
|------             |---          |
|Falsy가 아닌 모든 값|**0**        |
|                   |**NaN**      |
|                   |**false**    |
|                   |**null**     |
|                   |**undefined**|
|                   |‘’ (빈 문자)  |

<br>
<br>
<br>

---
<br>

## ➕ 추가

<br>

### ✅ 자료형을 활용해보자

지금까지와 같이 조건부 렌더링을 할 경우, 코드가 매우 복잡해질 수 있습니다

이럴 때 가능하다면 자료형을 활용할 수 있습니다

조건문 그런거 안써도 됩니다

```jsx
const TAP_NM_ELEMENT = {
  user : <p>사원 정보</p>,
  approval : <p>결재</p>,
  attendance : <p>근태</p>
}

function TapNm() {
  const status = 'user';// 편의를 위해 하드코딩했지만 props로 받는다고 가정하자

  return (
    <div>
      {
        TAP_NM_ELEMENT[status]
      }
    </div>
  )
}
```

같은 코드를 if문이나 switch문, 삼항연산자 등을 사용한다고 생각하면 끔찍합니다

리팩토링 시 이렇게 간단하게 구현할 수 있는 방법을 생각해보는 것도 좋겠습니다
<br><br><br>

### ✅ &&보단 삼항연산자?

`&&`가 매우 간단하기 때문에, 인라인(JSX 내)으로 작성 시 `&&`를 선호하는 사람이 많을 것 같습니다

그런데 이런 경우는 어떨까요?

```jsx
function UserList({ users }) {
  return (
    <ul>
      {users.length &&
        users.map(({ userId, userNm, address }) => (
          <li key={userId}>
            {userNm} {address}
          </li>
        ))}
    </ul>
  )
}

export default UserList;
```

```jsx
// 호출부
<UserList users={[
      {userId: 1, userNm: 'BaeRinE', address: '태양계 화성 12지구 13번 컨테이너'},
      {userId: 1, userNm: 'KimBooooS', address: '태양계 달나라 7번 크레이터'}
]}/>

<UserList users={[]}/>
```
<br>
users가 비지 않은 경우는 해당 리스트를 보여주고,

빈 배열(`[]`)인 경우엔 아무것도 보여주지 않을 것 같습니다.
<br><br>
하지만 실제 결과는..

<br>

<img src=./resources/resultOf&&.png
width="60%" height="200">


빈 배열인 경우
0이 화면에 출력됩니다
<br><br>
위에서 보았듯 0은 falsy한 값이므로 `&&` 우측의 값을 무시하고 falsy한 값인 0을 표현하게되며,  
이는 false로 취급되는 값이지 아예 렌더링은 안하는 값( `null` , `undefined` )이 아니기 때문에
0이 나오는 것입니다
<br><br>
반면 삼항연산자는 &&처럼 조건식의 false를 반환할 일이 없어 안전합니다
<br><br>
이렇게 실수를 유발할 가능성이 높은 `&&` 연산자를 사용하는 것은 지양하는 것이 좋겠습니다

<br><br><br>

---

<br>

## 결론

<br>

지금까지 조건부 렌더링에 대해 여러모로 알아봤지만

1. 자바스크립트 Statements는 리액트 컴포넌트 return문 안에서 사용 불가능
2. 자바스크립트 표현식은 리액트 컴포넌트 return문 안에서 사용 가능

<br>
이 두가지를 제외하면

<br>
결과적으로 이건 리액트만의 무언가가 아니라 그냥 ‘자바스크립트 코딩 스타일’입니다

<br>
그냥 가독성과 falsy값을 신경쓰시면서 편한대로 쓰시면 되겠습니다

<br>

---