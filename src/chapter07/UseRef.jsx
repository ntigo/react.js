import React, { useRef, useState } from "react";

export default function UseRef() {
    let [name, setName] = useState("홍길덩");
    const changeSetName = (e) => {
        console.log(`before name : ${name}, refName.current.value : ${refName.current.value}`)
        setName(e.target.value);
        console.log(`after name : ${name}, refName.current.value : ${refName.current.value}`)
    }

    let refName = useRef();
    const useRefFunction = () => {
        console.log(`before name : ${name}, refName.current.value : ${refName.current.value}`)
        refName.current.value = "홍길둥?";
        console.log(`after name : ${name}, refName.current.value : ${refName.current.value}`)
    }
    const printName = () => {
        console.log(`print name : ${name}, refName.current.value : ${refName.current.value}`)
    }

    console.log("===== 랜더링 =====");

    return (
        <div>
            <div style={ { textAlign : "left", width : "500px", marginLeft : "100px", marginTop : "100px" } }>
                <input type="text" style={ { width : "100px" } } value={name} ref={refName} onChange={changeSetName} />
                <button onClick={useRefFunction} >ref 값 변경</button>
                <button onClick={printName} >input text 값 확인</button>
            </div>
        </div>
    );
}