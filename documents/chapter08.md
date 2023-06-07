<center>
<img src=./resources/soaple.jpg
width="170" height="200">
</center>

본 문서는 ``소플의 처음 만난 리액트 (저자 이인제) - 한빛미디어`` 출판물을 이용하여 저작물에 대한 온라인 매체 이용 규정을 준수하여 허용 범위내에서 사용되었습니다.

상기 저서는 한빛출판네트워크의 저작물을 이용한 저작물로 저작권 법에 의해 저작권 보호를 받습니다.

---

# Chapter 8 

## 이벤트 처리하기
DOM 에서의 이벤트
```html
<!-- DOM에서는 클릭 이벤트 처리할 함수를 onclick 통해서 전달-->
<button onclick="action();">
    이벤트
</button>
```

React에서의 이벤트
```jsx
//onclick의 경우 DOM과 다르게 camel 표기법 사용
//React에선 함수 그대로 전달
<button onClick={action}>
    이벤트
</button>
```

## 이벤트 핸들러
이벤트를 처리하는 함수 `이벤트 핸들러` 라고 하며 또는 `이벤트 리스너`라고 부르기도 합니다.

이벤트 핸들러
```jsx
class ButtonTest01 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: true };

        // callback 에서 this를 사용 바인딩 필수
        this.Action = this.Action.bind(this);
    }

    Action() {
        this.setState(p => ({
            isChecked: !p.isChecked
        }));
    }

    render() {
        return (
            <button onClick={this.Action}>
                {this.state.isChecked ? 'AAAAA' : 'BBBBB'}
            </button>
        );
    }
}
```
jsx 에서 this에 의미에 대해 유의해야 합니다. `bind`를 하는 이유는 클래스 함수들이 `bound`되지 않기 때문, `bind`를 안하면 this.Action은 전역에서 호출됩니다.

### 클래스 필드 문법
`bind` 방법이 번거로울 경우 아래 코드 처럼 사용할 수 있습니디.

```jsx
class ButtonTest02 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isChecked: true };
    }

    Action = () => {
        this.setState((p) => ({
            isChecked: !p.isChecked,
        }));
    }

    render() {
        return (
            <button onClick={this.Action}>
                {this.state.isChecked ? 'AAAAA' : 'BBBBB'}
            </button>
        );
    }
}
```

### arrow function
`bind`또는 `클래스 필드 문법` 사용 안하고 아래와 같은 방법도 있습니다.

```jsx
class ButtonTest03 extends React.Component {
    
    Action = () => {
        console.log("test : ", this);
    }

    render() {
        return (
            <button onClick={() => this.Action()}>
                {this.state.isChecked ? 'AAAAA' : 'BBBBB'}
            </button>
        );
    }
}
```

지금은 `클래스 컴퍼넌트`를 거의 사용하지 않습니다. 해당 내용은 참고만 해주세요. 위에서 작성 한 예제 코드를 `함수 컴퍼넌트`로 변환 하면 아래 코드와 같습니다.

```jsx
function ButtonTest04(props) {
    const [isChecked, setIsChecked] = useState(true);

    const Action = () => {
        setIsChecked((p) => !p);
    }

    return (
        <button onClick={Action}>
            {isChecked ? 'AAAAA' : 'BBBBB'}
        </button>
    );
}
```

## Arguments(매개변수) 전달
`이벤트 핸들러`에 매개변수 전달

```jsx
<button onClick={(event) => this.Action(id, event)}>AAAAA</button>
<button onClick={this.Action.bind(this, id)}>AAAAA</button>
```

위의 코드는 동일한 역활을 하는 코드이나 1번은 `arrow function`, 2번은 `bind`를 사용한 방식입니다. 하지만 해당 코드는 `클래스 컴퍼넌트`에서 사용하는 방식으로 거의 사용하지 않습니다.
`함수 컴퍼넌트`에서 사용 시 아래와 같습니다.

```jsx
function ButtonTest05(props) {

    const Action = (a) => {
        console.log("a:", a);
    }

    return (
        <button onClick={() => Action('aaa')}>AAAAA</button>
    );
}
```

## 정리
리액트의 이벤트는 카멜 표기법 사용, 처리 할 함수를 그대로 전달
이벤트 핸들러의 경우 이벤트를 처리 하는 함수