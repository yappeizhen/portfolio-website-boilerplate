import React from "react"
import { Tag, Button } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import { skillsList } from './../assets/data/personalInfo';

function About(props) {
    const { person } = props;
    return (
        <>
            <div style={{ marginTop: '50px' }} className="about-section">
                <div style={{ display: "inline" }}>
                    <img className="about-pic" alt="Profile" src={person.img1} />
                </div>
                <div className="about-summary">
                    <div className="about-me-intro">
                        <h1>{person.lastName} {person.firstName}</h1>
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
            <section style={{ textAlign: 'center' }}>
                <Button href="https://www.linkedin.com/in/peizhen/" size='large' className="big-button" target="_blank" type="primary" shape="circle" icon={<LinkedinOutlined />} />
                <Button href="https://github.com/yappeizhen" size='large' className="big-button" target="_blank" type="primary" shape="circle" icon={<GithubOutlined />} />
                <Button href="mailto:yappeizhen@u.nus.edu" size='large' className="big-button" target="_blank" type="primary" shape="circle" icon={<MailOutlined />} />
            </section>
        </>
    )
}

export default About;