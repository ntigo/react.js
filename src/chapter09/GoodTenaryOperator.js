import { useState } from "react";
import './button.css';

function GoodTenaryOperator() {
    let [isGood, setGood] = useState(false);

    let toggleHeart = () => {
        setGood(!isGood);
    }

    return (
        <button className="btn_outLine btn_whiteOutLine" type="button" onClick={toggleHeart}>
            {
                isGood ? <p>❤️</p> : <p>🤍</p>
            }
        </button>
    );
}


export default GoodTenaryOperator;