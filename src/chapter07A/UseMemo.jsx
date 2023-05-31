import React, { useMemo, useState } from 'react';

const UseMemo = () => {
    // "count"라는 새 상태 변수를 선언합니다
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    const sum = (num) => {
        return num + num;
    }

    const a = useMemo(() => {
       console.log('useMemo', count);

       return sum(count);
    }, [count]);

    console.log('a', a);

    return (
        <div>
            <p>hook {count} times</p>
            <button onClick={() => {
                setCount1(count1 + 1);
            }}>
                Click me
            </button>
        </div>
    );
};

export default UseMemo;