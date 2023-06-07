<center>
<img src=./resources/soaple.jpg
width="170" height="200">
</center>

본 문서는 ``소플의 처음 만난 리액트 (저자 이인제) - 한빛미디어`` 출판물을 이용하여 저작물에 대한 온라인 매체 이용 규정을 준수하여 허용 범위내에서 사용되었습니다.

상기 저서는 한빛출판네트워크의 저작물을 이용한 저작물로 저작권 법에 의해 저작권 보호를 받습니다.

---

# Chapter 11 - 폼

### 11.1 폼이란 무엇인가?

```
폼이 무엇인지에 대해 mozila 사이트의 내용을 가져왔습니다.
폼은 정보를 제출하기 위한 대화형 컨트롤를 포함한 문서 구획입니다.

사용자로부터 정보를 입력받아 어떤 처리를 하기 위해 폼을 사용합니다. 보통은 서버에 데이터를 전송하는데 사용합니다.
HTML 태그에서 아래와 같은 것들이 있습니다.

select, textarea...
[input] checkbox, radio, text...

리액트에서 폼은 컴포넌트에서 state를 통해 관리되지만,
HTML에서 폼은 각 요소마다 state가 관리됩니다.
```

### 11.2 제어 컴포넌트

```
제어 컴포넌트가 무엇인지에 대해 react 사이트의 내용을 가져왔습니다.

HTML에서 <input>, <textarea>, <select>와 같은 폼 엘리먼트는 일반적으로 사용자의 입력을 기반으로 자신의 state를 관리하고 업데이트합니다.
React에서는 변경할 수 있는 state가 일반적으로 컴포넌트의 state 속성에 유지되며 setState()에 의해 업데이트됩니다.

우리는 React state를 “신뢰 가능한 단일 출처 (single source of truth)“로 만들어 두 요소를 결합할 수 있습니다.
그러면 폼을 렌더링하는 React 컴포넌트는 폼에 발생하는 사용자 입력값을 제어합니다.
이러한 방식으로 React에 의해 값이 제어되는 입력 폼 엘리먼트를 “제어 컴포넌트 (controlled component)“라고 합니다.

[https://ko.legacy.reactjs.org/docs/forms.html#controlled-components]
```

### 11.3 textarea 태그

```
여러줄의 글자를 입력 받을 수 있는 태그입니다.
```

### 11.4 select 태그

```
드롭다운 목록을 보여주고 거기서 선택을 통해 값을 입력할 수 있는 태그입니다.
```

### 11.5 file input 태그

```
file input의 경우는 읽기 전용이기 때문에 비제어 컴포넌트로 분류한다고 합니다.
```

### 11.7 input null value

```
input value에 고정값을 입력하거나, 값 변경에 대한 이벤트를 처리하지 않은 변수를 적용하게되면 input의 값을 [변경할 수 없는 상태]가 됩니다.
input value에 null을 입력하거나, 값 변경에 대한 이벤트를 처리한 변수를 적용하게되면 input의 값을 [변경할 수 있는 상태]가 됩니다.
```

