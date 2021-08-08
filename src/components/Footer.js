import { BackTop, Button } from 'antd';
import React from "react";
import styled from 'styled-components';

import { ArrowUpOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

// import storage from "../config/firebase";

// Styled Components
const StyledFooterContainer = styled.div`
    & {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 25px 80px;
        background-color: #ffe6ff;
    }
    @media only screen and (max-width: 680px) {
        flex-direction: column;
    }
`;
const StyledBackTop = styled(BackTop)`
    & {
        width: 150px;
        position: static;
    }
    @media only screen and (max-width: 680px) {
        display: none;
    }
`;
const StyledH3 = styled.h3`
    & {
        color: black;
        font-weight: 600;
    }
`;
const StyledConnect = styled(StyledH3)`
@media only screen and (max-width: 680px) {
    display: none;
}
`;
const StyledButtonGroup = styled.div`
& {
}
`;
const StyledButton = styled(Button)`
& {
    background-color: ${props => props.color};
    border: none;
}
`;

function Footer({ person }) {
    // Create a reference with an initial file path and name
    // var pathReference = storage.ref('Yap Pei Zhen Resume.pdf');
    // const [resumeDownloadUrl, setResumeDownloadUrl] = useState();
    // pathReference.getDownloadURL()
    //     .then((url) => {
    //         setResumeDownloadUrl(url);
    //     });

    return (
        <StyledFooterContainer color={person.themeColor.primaryColor}>
            <StyledConnect>Let's Connect!</StyledConnect>
            <StyledButtonGroup>
                <StyledButton color={person.themeColor.primaryColor} href={person.linkedIn} size='large' target="_blank" type="primary" shape="circle" icon={<LinkedinOutlined />} />
                &nbsp;&nbsp;
                <StyledButton color={person.themeColor.primaryColor} href={person.gitHub} size='large' target="_blank" type="primary" shape="circle" icon={<GithubOutlined />} />
                &nbsp;&nbsp;
                <StyledButton color={person.themeColor.primaryColor} href={`mailto:${person.email}`} size='large' target="_blank" type="primary" shape="circle" icon={<MailOutlined />} />
                {/* &nbsp;&nbsp;
                <StyledButton color={person.themeColor.primaryColor} href={resumeDownloadUrl} size='large' target="_blank" type="primary" shape="circle" icon={<FilePdfOutlined />} /> */}
            </StyledButtonGroup>
            <StyledBackTop>
                <StyledH3>Back to Top <ArrowUpOutlined /></StyledH3>
            </StyledBackTop>
        </StyledFooterContainer >
    )
}

export default Footer;