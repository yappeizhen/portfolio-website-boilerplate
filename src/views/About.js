import { Button, Tag, Tooltip } from 'antd';
import React from "react"
import styled from 'styled-components';

import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

import { skillsList } from './../assets/data/personalInfo';

// import storage from "../config/firebase";

// Styled Components
const StyledContainer = styled.div`
& {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-content: center;
    height: 100vh;
}
@media only screen and (max-width: 680px) {
    height: auto;
    flex-direction: column;
    margin-right: 50px;
    margin-left: 50px;
}
`;
const StyledAboutPic = styled.img`
& {
    border-radius: 5%;
    width: 300px;
    display: inline;
    margin-right: 5rem;
    margin-left: 3rem;
}
@media only screen and (max-width: 800px) {
    width: 200px;
    margin: auto;
    margin-top: 100px;
}
`;
const StyledAboutSummary = styled.div`
& {
    width: 650px;
}
@media only screen and (max-width: 680px) {
    width: auto;
}
`;
const StyledIntro = styled.div`
& {
    text-align: left;
    width: auto;
    text-align: center;
}
`;
const StyledTag = styled(Tag)`
& {
    margin-bottom: 10px
}
`;
const StyledButtonGroup = styled.div`
& {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 10px;
}
`;
const StyledContactButton = styled(Button)`
& {
    margin-right: 5px;
    margin-left: 5px;
    background-image: linear-gradient(to right, #ECE9E6 0%, #FFFFFF  51%, #fce1fb  100%);
    color: #ce4c92;
    size: 100px;
    border: none;
}
&:hover {
    background-color: #ce4c92;
    color: white;
}
`;
function About(props) {
    // For uploading of resume via Firebase
    // Create a reference with an initial file path and name
    // var pathReference = storage.ref('Resume.pdf');
    // const [resumeDownloadUrl, setResumeDownloadUrl] = useState();
    // pathReference.getDownloadURL()
    //     .then((url) => {
    //         setResumeDownloadUrl(url);
    //     });

    const { person } = props;
    return (
        <>
            <StyledContainer>
                <StyledAboutPic alt="Profile" src={person.img1} />
                <StyledAboutSummary>
                    <StyledIntro>
                        <h1>{person.firstName} {person.lastName}</h1>
                        {person.aboutIntro.map((item) => (<p>{item}</p>))}
                    </StyledIntro>
                    <StyledIntro>
                        <h2>Skills</h2>
                        {skillsList.map((skill) => {
                            return (<StyledTag key={skill.name} color={skill.color}>{skill.name}</StyledTag>);
                        })}
                    </StyledIntro>
                    <StyledButtonGroup>
                        <Tooltip title="LinkedIn">
                            <StyledContactButton href={person.linkedIn} size='large' target="_blank" type="primary" shape="circle" icon={<LinkedinOutlined />} />
                        </Tooltip>
                        <Tooltip title="GitHub">
                            <StyledContactButton href={person.gitHub} size='large' target="_blank" type="primary" shape="circle" icon={<GithubOutlined />} />
                        </Tooltip>
                        <Tooltip title="Email">
                            <StyledContactButton href={`mailto:${person.email}`} size='large' target="_blank" type="primary" shape="circle" icon={<MailOutlined />} />
                        </Tooltip>
                        {/* <Tooltip title="Resume">
                            <StyledContactButton href={resumeDownloadUrl} size='large' target="_blank" type="primary" shape="circle" icon={<FilePdfOutlined />} />
                        </Tooltip> */}
                    </StyledButtonGroup>
                </StyledAboutSummary>
            </StyledContainer>
        </>
    )
}

export default About;