import React from "react";
import styled from 'styled-components'

// Styled Components
const StyledH1 = styled.h1`
& {
    text-align: center;
    padding-bottom: 10px;
    margin-top: 20px;
}
@media only screen and (max-width: 680px) {
    font-size: 25px;
}
`;
const StyledDivider = styled.hr`
& {
    border: dotted #ce4c92 5px;
    border-bottom: none;
    margin-bottom: 50px;
    width: 3%;
}
`;

function SectionHeader({ title }) {
    return (
        <>
            <StyledH1>{title}</StyledH1>
            <StyledDivider />
        </>
    )
}

export default SectionHeader;