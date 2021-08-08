import { Button, Card } from 'antd';
import React from "react";
import styled from 'styled-components';

import { LinkOutlined } from '@ant-design/icons';

// Styled Components
const StyledContainer = styled.div`
& {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35rem;
    max-width: 100%;
    padding-bottom: 20px;
}
`;
const StyledCard = styled(Card)`
& {
    text-align: center;
    width: 90%;
    height: 20rem;
    background-color: ${props => props.color};
    margin-bottom: 10px;
    border: none;
}
@media only screen and (max-width: 680px) {
    height: 12rem;
}
`;
const StyledImg = styled.img`
& {
    position: absolute;
    display: block;
    left: 50%;
    top: 50%;
    max-width: 70%;
    max-height: 90%;
    transform: translate(-50%,-50%);
}
`;
const StyledTextContainer = styled.div`
& {
    width: 35.62rem;
    max-width: 80%;
    padding-bottom: 20px;
}
`;
const StyledButton = styled(Button)`
&{
    background: transparent;
    border: transparent;
    margin-top: 10px;
    color: ${props => props.themecolor};
}
`;
const StyledH2 = styled.h2`
@media only screen and (max-width: 680px) {
    font-size: 20px;
    margin: 0;
}
`;
const StyledH3 = styled.h3`
@media only screen and (max-width: 680px) {
    font-size: 16px;
}
`;

function Thumbnail(props) {
    const { person, experience } = props;
    const showLink = () => {
        if (experience.link) {
            return <StyledButton themecolor={person.themeColor.primaryColor} href={experience.link} size="large" target="_blank" icon={<LinkOutlined />} />
        }
    }

    return (
        <StyledContainer>
            <StyledCard color={experience.themeColor} >
                <StyledImg alt="thumbnail" src={experience.img} />
            </StyledCard>
            <StyledTextContainer>
                <StyledH2>{experience.name} {showLink()}</StyledH2>
                <StyledH3>{experience.role}</StyledH3>
            </StyledTextContainer>
        </StyledContainer>
    );
}

export default Thumbnail;