import React, { useState } from "react";

export default function SelectTag() {
    const [goodsList, setGoodsList] = useState([
        { goodsCode : "A", goodsName : "스크류바" },
        { goodsCode : "B", goodsName : "옥동자" },
        { goodsCode : "C", goodsName : "붕어싸만코" }
    ]);

    const [selectGoodsCode, setSelectGoodsCode] = useState("A");
    const changeGoodsCode = (e) => {
        console.log(e.target.value);
        setSelectGoodsCode(e.target.value);
    }

    const [selectIceCream, setSelectIceCream] = useState("Z");
    const changeIceCream = (e) => {
        setSelectIceCream(e.target.value);
    }

    const [multiple, setMultiple] = useState([ "C" ]);
    const changeMultiple = (e) => {
        setMultiple(Array.from(
            e.target.selectedOptions,
            option => option.value
        ));

        // const selectedOptions = [];
        // for ( let i = 0; i < e.target.selectedOptions.length; ++i ) {
        //     selectedOptions.push( e.target.selectedOptions[i].value );
        // }
        // setMultiple(selectedOptions);
    }

    return (
        <div>
            <div style={ { marginTop : "100px" } }>
                <select onChange={changeGoodsCode} value={selectGoodsCode}>
                {
                    goodsList.map((item) => (
                        item.goodsCode === "B"
                            ? <option selected value={item.goodsCode} key={item.goodsCode}>{item.goodsName}</option>
                            : <option value={item.goodsCode} key={item.goodsCode}>{item.goodsName}</option>
                    ))
                }
                </select>
            </div>

            <div>
                <select onChange={changeIceCream} value={selectIceCream}>
                    <option value="G">바밤바</option>
                    <option value="Z">비비빅</option>
                    <option value="X">왈도콘</option>
                </select>
            </div>

            <div>
                <select multiple onChange={changeMultiple} value={multiple}>
                    {
                        goodsList.map((item) => (
                            <option value={item.goodsCode} key={item.goodsCode}>{item.goodsName}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}