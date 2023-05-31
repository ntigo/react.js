import React, { useState } from "react";

export default function InputNullValue() {
    const [value, setValue] = useState("");
    const [name, setName] = useState("입력이 아마도 불가능");

    const valueChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div style={ { marginTop : "100px", width : "50%", left : "25%", position : "relative", textAlign : "left" } }>
            <h3>컴포넌트 변수 적용</h3>
            <div>
                입력 가능 -> <input type="text" placeholder="입력하세요." onChange={valueChange} value={value} />
            </div>
            <div>
                입력 불가능 -> <input type="text" value={name} />
            </div>
            <h3>컴포넌트 변수 미적용</h3>
            <div>
                입력 가능 -> <input type="text" placeholder="입력하세요." value={null} />
            </div>
            <div>
                입력 불가능 -> <input type="text" value="입력이 아마도 불가능" />
            </div>
        </div>
    );
}