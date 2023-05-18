import React, { useState } from 'react';

const UseState = () => {
    // "count"라는 새 상태 변수를 선언합니다
    const [count, setCount] = useState(0);
    let count2 = 0;

    console.log('count', count)
    console.log('count2', count2)

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    return (
        <div>
            <p>hook {count} times</p>
            <p>no hook {count2} times</p>
            <button onClick={() => {
                count2++;
                setCount(count + 1);
            }}>
                Click me
            </button>
        </div>
    );
};

export default UseState;