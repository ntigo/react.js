import React from "react";
import styled from "styled-components";

const StyledComponents = () => {
    // 태그 함수 & 태그드 템플릿 리터럴
    // styled.h1 메소드에 문자열을 포함한 배열 형태로 파라미터 전달
    const Title = styled.h1`
        color: orange;
        font-style: oblique;
    `;

    // 태그 함수 & 태그드 템플릿 리터럴
    // h2 태그로 생성한 createStyle 함수에 문자열을 포함한 배열 형태로 파라미터 전달
    const SubTitle = styled("h2")`
        color: blue;
        font-style: oblique;
    `;

    // styled.h3 메소드에 문자열을 포함한 배열 형태로 전달
    const Contents = styled.h3(["color: green;font-style: oblique;"]);

    // 리액트 노드를 변수로 할당하여 사용하는 방법
    const Footer = <div>footer</div>;

    return (
        <>
            <Title>styled-components!!</Title>
            <SubTitle>sub-title</SubTitle>
            <Contents>Contents blahblah~</Contents>
            {Footer}
        </>
    )
}

export default StyledComponents;