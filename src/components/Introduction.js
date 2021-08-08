import React from "react";
import styled from 'styled-components';

// Styled Components
const StyledIntroContainer = styled.div`
& {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
@media only screen and (max-width: 680px) {
    flex-direction: column;
    margin-right: 25px
    margin-left: 25px;
}
`;
const StyledIntroTextContainer = styled.div`
& {
    text-align: left;
    display: inline-block;
    max-width: 450px;
}
@media only screen and (max-width: 680px) {
    margin-bottom: 10px;
    text-align: center;
}
`;
const StyledProfileContainer = styled.div`
& {
    position: relative;
    display: inline-block;
    max-width: 45%;
    margin-left: 120px;
}
@media only screen and (max-width: 680px) {
    margin: 0;
}
`;
const StyledProfilePattern = styled.img`
& {
    position: absolute;
    display: inline;
    width: 230px;
    z-index: -1;
    left: -90px;    
    bottom: 60px;
}
@media only screen and (max-width: 680px) {
    width: 120px;
    left: -50px; 
    bottom: 20px;
}
`;
const StyledProfilePicture = styled.img`
& {
    display: inline;
    border-radius: 50%;
    width: 370px;
}
@media only screen and (max-width: 680px) {
    width: 200px;
}
`;
const StyledName = styled.span`
& {
    color: ${props => props.themecolor.primaryColor}
}
`;
const StyledIntroH2 = styled.h2`
@media only screen and (max-width: 680px) {
    font-size: 18px;
}
`;
const StyledIntroH1 = styled.h1`
@media only screen and (max-width: 680px) {
    font-size: 20px;
}
`;
function Introduction({ person }) {
    return (
        <StyledIntroContainer>
            <StyledIntroTextContainer>
                <StyledIntroH2>Hello!</StyledIntroH2>
                <br />
                <StyledIntroH1 style={{ margin: '0' }}>I'm <StyledName themecolor={person.themeColor}>{person.firstName}</StyledName>,</StyledIntroH1>
                <StyledIntroH1>{person.areaOfInterest}</StyledIntroH1>
            </StyledIntroTextContainer>
            <StyledProfileContainer>
                <StyledProfilePattern src={person.profilePattern} />
                <StyledProfilePicture alt="Profile" src={person.img} />
            </StyledProfileContainer>
        </StyledIntroContainer>
    );
}

export default Introduction;