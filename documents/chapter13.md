<center>
<img src=./resources/soaple.jpg
width="170" height="200">
</center>

본 문서는 ``소플의 처음 만난 리액트 (저자 이인제) - 한빛미디어`` 출판물을 이용하여 저작물에 대한 온라인 매체 이용 규정을 준수하여 허용 범위내에서 사용되었습니다.

상기 저서는 한빛출판네트워크의 저작물을 이용한 저작물로 저작권 법에 의해 저작권 보호를 받습니다.

---
## Chapter13. 합성 & 상속
### 📋 목차
#### 1.합성(Composition)
#### 2.특수화
#### 3.상속
#### 4.정리

### 1.합성(Composition)
React는 강력한 합성 모델을 가지고 있으며, 상속 대신 합성을 사용하여 컴포넌트 간에 코드를 재사용하는 것이 좋습니다.
![합성 3 001](https://github.com/KyungHoGitHub/TestCode/assets/119731100/98a45d4c-543e-4190-8b56-576938f509b4)
### Containment 
컴포넌트에서 다른 컴포넌트를 담기라고 생각해 볼 수있습니다.
![무제 3 002](https://github.com/KyungHoGitHub/TestCode/assets/119731100/ddbea7e4-0617-4d38-82e4-86556a3f9048)

컴포넌트에 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우로 박스 역할을 하는 Siderbar, Dialog와 같은 컴포넌트가 있습니다</br>
위와 같은 상황에 컴포넌트의 경우 ``children prop``을 사용하여 자식 엘리먼트를 출력에 그대로 전달하는 것을 권장합니다.

### 🔎 1.1 props.children 란?
태그와 태그 사이의 모든 내용을 표시하기 위해 사용되는 특수한 props 입니다.

```
const Category = (props) => {
  return <ul>{props.children}</ul>;
};
export default Category;
```
-> (1) Cateogory 컴포넌트를 생성 

```
const App() => (
    <Category>
      <li>1번 항목</li>
      <li>2번 항목</li>
      <li>추가... 항목</li>
     </Category>
);     
```
-> (2) 현재 3개의 li 태그를 Catory컴포넌트로 구성</br>
   추가로 구성되거나 알수없는 경우 이런경우 props.childeren을 사용하여 태그사이의 모든 내용을 표시해 주면됩니다

### 2.특수화
때로는 어떤 컴포넌트의 “특수한 경우”인 컴포넌트를 고려해야 하는 경우가 있습니다. 예를 들어,</br>
WelcomeDialog는 Dialog의 특수한 경우라고 할 수 있습니다. 
![구체화자료 003](https://github.com/KyungHoGitHub/TestCode/assets/119731100/ed23ca3c-0ce3-43f8-9745-638e24ce78e1)

```
function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}
```
공통된 컴포넌트인 Dialog를 특수한 컴포넌트인 WelcomDialog에서 사용 할경우 </br>
위와 같이 WelcomeDialog 에서 필요한 title,message를 받아서 구체화 하여 사용 할수 있습니다. 

### 3.상속 
Facebook에서는 수천 개의 React 컴포넌트를 사용하지만, 컴포넌트를 상속 계층 구조로 작성을 권장할만한 사례를 아직 찾지 못했습니다.[리액트 공식문서 내용]</br>
Component 자체로 재사용 가능하기때문에 상속을 따로 권하지 않습니다.</br>
위 처럼 재사용이 필요한 Component 를 분리하고 위에 Dialog 컴포넌트와같이, 이를 import해서 사용하는 것이 편리하다고 합니다.</br>
만약 UI 가 아닌 기능을 재사용하고 싶다면, 별도의 javascript 모듈로 분리하여 import 한 후 사용하는 것이 좋.</br>

### 📋 4.정리
합성을 통해 컴포넌트가 담는 경우 어떤한 엘리먼트가 사용되는지 파악해야 하며 위에서 언급된 케이스에 경우 props.children을 사용을 권장드리며</br>
특수한 경우에는  과정과 컴포넌트 상속 보다는 재사용 가능한 컴포넌트를 분리를 통해 사용하는것을 고려해 보시면 좋을것 같습니다.


