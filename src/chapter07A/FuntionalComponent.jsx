import React, {useEffect} from 'react';
 
const FunctionalComponent = () => {
    useEffect(() => {
        console.log('a');
    }, []);

    useEffect(() => {
        console.log('b');
    }, []);

    useEffect(() => {
        console.log('c');
    }, []);

    return <>
        함수형 컴포넌트
    </>
};

export default FunctionalComponent;