import React, { useState, useCallback } from "react";

export default function CallbackRef() {
    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);
    let [value, setValue] = useState("");

    const domChange = useCallback((dom) => {
        console.log("===== domChange 생성 =====");

        if ( dom !== null ) {
            setWidth(dom.getBoundingClientRect().width);
            setHeight(dom.getBoundingClientRect().height);
        }
    }, [value]);

    const domValueChange = (e) => {
        console.log("===== domValueChange 생성 =====");
        setValue(e.target.value);
    }

    console.log("===== 랜더링 =====");

    return (
        <div style={ { textAlign : "left", paddingLeft : "100px", paddingTop : "100px" } }>
            <textarea ref={domChange} onChange={domValueChange} style={ { width : "500px", height: "500px" } }></textarea>
            <div>
                <label>width : {width}</label>
            </div>
            <div>
                <label>height : {height}</label>
            </div>
            <div>
                <label>value : {value}</label>
            </div>
        </div>
    );
}

