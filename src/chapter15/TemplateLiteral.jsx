import React, {useState} from "react";

// ES6(2015) 문법
const TemplateLiteral = () => {
    const [literal, setLiteral] = useState("리터럴");

    // 여러 줄 입력
    const multiLineStr = `
        다음과 같이 줄바꿈해도
        에러가 발생하지 않습니다.
    `;
    // 대체 가능한 expression이 있는 문자열
    const formatStr = `이것은 ${literal}입니다.`;

    return (
        <>
            <h1>
                <pre>{multiLineStr}</pre>
            </h1>
            <hr/><br/>
            <label>리터럴 입력창 : </label>
            <input value={literal} onChange={e => {setLiteral(e.target.value);}}/>
            <h1>{formatStr}</h1>
        </>
    )
}

export default TemplateLiteral;