import React, { useState } from 'react';

function ButtonTest04(props) {
    const [isChecked, setIsChecked] = useState(true);

    const Action = () => {
        setIsChecked((p) => !p);
    }

    return (
        <button onClick={Action}>
            {isChecked ? 'AAAAA' : 'BBBBB'}
        </button>
    );
}
export default ButtonTest04;