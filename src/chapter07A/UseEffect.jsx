import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0);

    // componentDidMount
    useEffect(() => {
        console.log('mount', count);
        // 브라우저 API를 이용해 문서의 타이틀을 업데이트합니다
        document.title = `You clicked ${count} times`;

        return () => {
            // cleanup(해제)
            // componentDidUnmount
            console.log('unmount', count);
        }

        // componentDidUpdate
    }, [count]);

    useEffect(() => {
        console.log('mount1', count);
    }, [count]);

    useEffect(() => {
        console.log('mount2', count);
    }, [count]);

    useEffect(() => {
        console.log('mountc', count);
    }, [count]);

    return (
        <div>
            Effect Hook {count}
            <>
                <button onClick={() => {
                    setCount(count + 1);
                }}>
                    Click me
                </button>
            </>
        </div>
    );
};

export default UseEffect;