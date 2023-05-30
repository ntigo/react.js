<center>
<img src=./resources/soaple.jpg
width="170" height="200">
</center>

본 문서는 ``소플의 처음 만난 리액트 (저자 이인제) - 한빛미디어`` 출판물을 이용하여 저작물에 대한 온라인 매체 이용 규정을 준수하여 허용 범위내에서 사용되었습니다.

상기 저서는 한빛출판네트워크의 저작물을 이용한 저작물로 저작권 법에 의해 저작권 보호를 받습니다.

---

# 리스트와 키

## 목차
<br>

## Ⅰ. 리액트에서 리스트 사용하기
- 다양한 방식의 리스트 사용 방법
- 실전에 적용하기 : 우리는 어떻게 사용하고 있나?
- 리스트 사용 방식 개선하기
## Ⅱ. 키를 생성하고 사용하기
- 데이터에서 아이디 또는 유니크 값 추출하기
- 인조 식별자 생성 및 사용
## Ⅲ. 결론
<br><br>

## Ⅰ. 리액트에서 리스트 사용하기
### &nbsp;&nbsp;1. 다양한 방식의 리스트 사용 방법
- 반복문 사용하기
- forEach 함수 사용하기
- `map` 함수 사용하기
<br>
### &nbsp;&nbsp;2. 실전에 적용하기 : 우리는 어떻게 사용하고 있나?
- jsx 내부에서 map 함수 사용
- `jsx 외부`에서 `map` 함수 사용
- `컴포넌트` 사용
<br>
### &nbsp;&nbsp;3. 리스트 사용 방식 개선하기
- `컴포넌트화`
- 뷰와 로직 `분리`
<br><br>

## Ⅱ. 키를 생성하고 사용하기
### &nbsp;&nbsp;1. 데이터에서 `아이디` 또는 `유니크 값` 추출하기
```jsx
const TabletList = () => {
    const tabletList = [
      {
        serialNo: 'A1230000000001',
        productNo: 'A123',
        product: '태블릿',
      },
      {
        serialNo: 'B1230000000001',
        productNo: 'B123',
        product: '태블릿 Ultra',
      },
    ];
    const TabletList1 = tabletList.map((tablet) => (
      <li key={tablet.serialNo}>{tablet.product}</li>
    ));
    const TabletList2 = tabletList.map((tablet) => (
      <li key={tablet.productNo}>{tablet.product}</li>
    ));

    return (
      <ul>
        {TabletList1}
        {TabletList2}
      </ul>
    );
}
```
### &nbsp;&nbsp;2. `인조 식별자` 생성 및 사용
```jsx
const FruitList = () => {
    const fruits = ["사과", "바나나", "포도", "오렌지"];
    const Fruits = fruits.map((fruit, idx) => (
      <li key={idx}>{fruit}</li>
    ));
    return <ul>{Fruits}</ul>;
}
```
### &nbsp;&nbsp;3. 인조 식별자 사용시 `주의사항`
- 예상치 못한 동작 발생 가능
- 항목에 변화를 주지 않는 케이스에서 사용  
: ex) 라디오 버튼, 셀렉트 박스
<br><br>

## Ⅲ. 결론
> 리액트에서 리스트를 사용하는 여러가지 방법을 이해하고, 적재적소에 활용합시다. 가독성 및 재활용을 생각한 컴포넌트화를 고려합시다. 특히, 뷰와 로직의 분리는 가독성과 코드의 재활용을 극대화시킵니다.