import React, { useState } from 'react';

function ButtonTest05(props) {

    const Action = (a) => {
        console.log("a:", a);
    }

    return (
        <button onClick={() => Action('aaa')}>AAAAA</button>
    );
}

export default ButtonTest05;