import React, { useState, useCallback } from "react";

export default function ControlledComponent() {
    const [brandName, setBrandName] = useState("");
    const [goodsName, setGoodsName] = useState("");

    const [addBrandName, setAddBrandName] = useState("");
    const [addGoodsName, setAddGoodsName] = useState("");

    const brandNameChange = (e) => {
        setBrandName(e.target.value);
    }

    const goodsNameChange = (e) => {
        setGoodsName(e.target.value);
    }

    const goodsAdd = (e) => {
        setAddBrandName(brandName);
        setAddGoodsName(goodsName);
        e.preventDefault();
    }

    return (
        <div style={ { marginTop : "100px", marginLeft : "100px", textAlign : "left" } }>
            <form onSubmit={goodsAdd}>
                <div style={ { height : "30px" } }>
                    <label>브랜드 명 : </label>
                    <input type="text" value={brandName} onChange={brandNameChange} />
                </div>
                <div style={ { height : "30px" } }>
                    <label>상품 명 : </label>
                    <input type="text" value={goodsName} onChange={goodsNameChange} />
                </div>
                <div style={ { height : "30px" } }>
                    <input type="submit" value="등록" />
                    <button type="submit">등록</button>
                </div>
                <div style={ { marginTop : "10px" } }>
                {
                    addBrandName !== "" && addGoodsName !== ""
                        ? `[${addBrandName}] [${addGoodsName}] 상품 등록 완료.`
                        : "상품을 등록해 주세요."
                }
                </div>
            </form>
        </div>
    );
}

