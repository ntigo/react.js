import React, { useState } from "react";

let setValueRef;

export function ruleTest() {
    setValueRef("aabbcc");
}

export default function Rule() {
    let [value, setValue] = useState("");
    let [value2, setValue2] = useState("");

    const valueChange = (e) => {
        setValue(e.target.value);
    }

    setValueRef = setValue2;

    console.log("===== 랜더링 =====");

    return (
        <div>
            <div style={ { textAlign : "left", paddingLeft : "100px", paddingTop : "100px" } }>
                <textarea style={ { width : "500px", height: "500px" } } onChange={valueChange}></textarea>
                <button onClick={ruleTest}>Test</button>
            </div>
            <div style={ { textAlign : "left", paddingLeft : "100px", paddingTop : "20px" } }>
                value : {value}
            </div>
            <div style={ { textAlign : "left", paddingLeft : "100px", paddingTop : "20px" } }>
                value2 : {value2}
            </div>
        </div>
    );
}

