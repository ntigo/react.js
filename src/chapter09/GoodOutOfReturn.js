import { useState } from "react";
import './button.css';

function GoodOutOfReturn() {
    let [isGood, setGood] = useState(false);
    let heart;

    if(isGood){
        heart = <p>❤️</p>;
    }else{
        heart = <p>🤍</p>;
    }

    let toggleHeart = () => {
        setGood(!isGood);
    }

    return (
        <button className="btn_outLine btn_whiteOutLine" type="button" onClick={toggleHeart}>
            {heart}
        </button>
    );
}


export default GoodOutOfReturn;