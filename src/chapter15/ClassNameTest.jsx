import React from "react";
import "./ClassNameTest.css";
import { ReloadOutlined } from "@ant-design/icons";


const util = require("util");
// 브라우저에서 에러 확인을 위한 console.error 재정의
window.console.error = (message, ...args) => {
    const formatStr = util.format(message, ...args);
    alert(formatStr);
}

const ClassNameTest = () => {
    return (
        <div className="class_name_test_wrap">
            {/* 리액트에서는 class라는 프로퍼티 대신 className을 사용한다.*/}
            <button type={"button"} onClick={() => window.location.reload()}><ReloadOutlined /> 새로 고침</button>
            <div className={"correct"}>오류가 발생하지 않습니다.</div>
            <div className={"not_correct"}>오류가 발생합니다.</div>
        </div>
    )
}

export default ClassNameTest;