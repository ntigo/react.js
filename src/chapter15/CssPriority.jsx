import React from 'react';
import './CssPriority.css';

// CSS 우선순위 표현
const CssPriority = () => {
    return (
        <div className={"parents"}>
            <h1 style={{ color: "black" }}>『CSS 우선순위』</h1>
            <h1>1. 상위 객체 상속</h1>
            <h2>2. 태그명으로 지정</h2>
            <h2 className={"childNode"}>3. class 지정</h2>
            <h2 id={"child"} className={"childNode"}>4. id 지정</h2>
            <h2 id={"child"} style={{ color: "blue" }}>5. 스타일 직접 지정</h2>
            <h2 className={"child_important"} style={{ color: "blue" }}>6. !importnat 키워드 사용</h2>
            <hr />
            <h1 style={{ color: "black" }}>『동일한 우선순위일 경우』</h1>
            <h2 className={"child childNode"}>관계가 더 많은 경우</h2>
            <h2 className={"children child"}>나중에 선언한 경우</h2>
        </div>
    )
}

export default CssPriority;