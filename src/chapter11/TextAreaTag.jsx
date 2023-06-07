import React, { useState } from "react";

export default function TextAreaTag() {
    const [memo, setMemo] = useState("입력입력입려억");
    const changeMemo = (e) => {
        setMemo(e.target.value);
    }

    return (
        <div>
            <textarea onChange={changeMemo} value={memo} style={ { width : "300px", height : "300px" } } />
        </div>
    );
}