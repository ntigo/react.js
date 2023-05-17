import React, { useState, useCallback } from "react";

let set = new Set();

export default function UseCallback() {
    let [firstValue, setFirstValue] = useState("0");
    const changeFirstValue = (e) => {
        setFirstValue(e.target.value);
    };

    let [secondValue, setSecondValue] = useState("0");
    const changeSecondValue = (e) => {
        setSecondValue(e.target.value);
    }

    let [resultValue, setResultValue] = useState(0);

    let [name, setName] = useState("홍길둥");
    const changeSetName = (e) => {
        setName(e.target.value);
    }

    // plusValue 메서드가 계속해서 새로 정의됨
    // const plusValue = () => {
    //     setResultValue( parseInt(firstValue) + parseInt(secondValue) );
    // }

    // plusValue 메서드는 firstValue, secondValue 가 변경되었을때만 새로 정의됨
    const plusValue = useCallback( () => {
        setResultValue( parseInt(firstValue) + parseInt(secondValue) );
    }, [firstValue, secondValue] );

    set.add(plusValue);
    console.log(set);

    return (
        <div>
            <div style={ { textAlign : "left", width : "300px", marginLeft : "100px", marginTop : "100px" } }>
                <input type="text" style={ { width : "40px" } } value={firstValue} onChange={changeFirstValue} /> +
                <input type="text" style={ { width : "40px" } } value={secondValue} onChange={changeSecondValue} /> =
                <label style={ { marginLeft : "4px" } }>{resultValue}</label>
            </div>
            <div style={ { textAlign : "left", width : "300px", marginLeft : "100px", marginTop : "4px" } }>
                <button onClick={plusValue}>계산하기</button>
            </div>
            <div style={ { textAlign : "left", width : "300px", marginLeft : "100px", marginTop : "20px" } }>
                <input type="text" style={ { width : "100px" } } value={name} onChange={changeSetName} />
            </div>
        </div>
    );
}