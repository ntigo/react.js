import React, { useState } from "react";
import Style from "./CssModule.module.css";

const CssModule = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            {/* "Style.클래스명"과 같이 사용합니다. */}
            <div className={Style.title}>CSS Module!!</div>
            {/* 다중 클래스명은 템플릿 리터럴을 통해 사용합니다. */}
            <div className={`${Style.sub_title} ${Style.blue}`}>Is sub-title!</div>
            <hr /><br />
            <button type={"button"} onClick={() => setToggle(!toggle)}>동적으로 클래스를 할당합니다</button>
            {/* 동적 클래스명은 논리 연산자를 통해 사용합니다. */}
            <div className={toggle ? Style.contents : undefined}>Contents blahblah~</div>
        </>
    )
}

export default CssModule;


