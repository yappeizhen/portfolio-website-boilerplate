import React from "react"
import { Tag, Button, Tooltip } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { skillsList } from './../assets/data/personalInfo';
//import storage from "../config/firebase";

function About(props) {
    // For connecting to firebase 
    // // Create a reference with an initial file path and name
    // var pathReference = storage.ref('Yap Pei Zhen Resume.pdf');
    // const [resumeDownloadUrl, setResumeDownloadUrl] = useState();
    // pathReference.getDownloadURL()
    //     .then((url) => {
    //         setResumeDownloadUrl(url);
    //     });

    const { person } = props;
    return (
        <>
            <div style={{ marginTop: '50px' }} className="about-section">
                <div style={{ display: "inline" }}>
                    <img className="about-pic" alt="Profile" src={person.img1} />
                </div>
                <div className="about-summary">
                    <div className="about-me-intro">
                        <h1>{person.firstName} {person.lastName}</h1>
                        <p>{person.aboutIntro}</p>
                    </div>
                    <div className="about-me-intro">
                        <h2>Skills</h2>
                        {skillsList.map((skill) => {
                            return (<Tag className="skill-tag" key={skill.name} color={skill.color}>{skill.name}</Tag>);
                        })}
                    </div>
                </div>
            </div>
            <section style={{ textAlign: 'center', padding: '20px' }}>
                <Tooltip title="LinkedIn">
                    <Button href="/#" size='large' className="big-button" target="_blank" type="primary" shape="circle" icon={<LinkedinOutlined />} />
                </Tooltip>
                <Tooltip title="GitHub">
                    <Button href="/#" size='large' className="big-button" target="_blank" type="primary" shape="circle" icon={<GithubOutlined />} />
                </Tooltip>
                <Tooltip title="Email">
                    <Button href="mailto:email@email.com" size='large' className="big-button" target="_blank" type="primary" shape="circle" icon={<MailOutlined />} />
                </Tooltip>
                {/* <Tooltip title="Resume">
                    <Button href={resumeDownloadUrl} size='large' className="big-button" target="_blank" type="primary" shape="circle" icon={<FilePdfOutlined />} />
                </Tooltip> */}
            </section>
        </>
    )
}

export default About;