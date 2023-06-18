import React from "react";
import styled from "styled-components";

const StyledComponents = () => {
    const Title = styled.h1`
        color: orange;
        font-style: oblique;
    `;
    const SubTitle = styled.h2(["color: ", ";font-style: oblique;"], "blue");

    return (
        <>
            <Title>Styled-Components!!</Title>
            <SubTitle>sub-title</SubTitle>
        </>
    )
}

export default StyledComponents;