import React from "react";
import styled from 'styled-components';

import { personalInfoData, projectData, socialImpactData, workExperienceData } from './../assets/data/personalInfo';
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import SectionHeader from "../components/SectionHeader";
import Thumbnail from "../components/Thumbnail";

// Styled Components
const StyledCardDisplay = styled.div`
& {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-self: center;
    justify-content: center;
}
`;

function Home() {

    return (
        <>
            <Introduction person={personalInfoData} />
            <SectionHeader title="Work Experience" />
            <StyledCardDisplay>
                {workExperienceData.map((item) => (<Thumbnail key={item.name} person={personalInfoData} experience={item} />))}
            </StyledCardDisplay>
            <br />
            <SectionHeader title="Projects" />
            <StyledCardDisplay>
                {projectData.map((item) => (<Thumbnail key={item.name} person={personalInfoData} experience={item} />))}
            </StyledCardDisplay>
            <br />
            <SectionHeader title="Social Impact" />
            <StyledCardDisplay>
                {socialImpactData.map((item) => (<Thumbnail key={item.name} person={personalInfoData} experience={item} />))}
            </StyledCardDisplay>
            <Footer person={personalInfoData} />
        </>
    )
}

export default Home;