import React from "react"
import { Row, Col, Tag } from 'antd';
import { skillsList } from './../assets/data/personalInfo';

function About(props) {
    const { person } = props;
    return (
        <>
            <div style={{ marginTop: '50px' }} className="about-section">
                <Row>
                    <Col lg={10}>
                        <div style={{ display: "inline"}}>
                            <img className="about-pic" alt="Profile" src={person.img1} />
                        </div>
                    </Col>
                    <Col lg={14}>
                        <div className="about-me-intro">
                            <h1>{person.lastName} {person.firstName}</h1>
                            <p>{person.aboutIntro}</p>
                        </div>
                        <div className="about-me-intro">
                            <h2>Skills</h2>
                            {skillsList.map((skill) => {
                                return (<Tag className="skill-tag" color={skill.color}>{skill.name}</Tag>);
                            })}
                        </div>
                    </Col>
                </Row>

            </div>
        </>
    )
}

export default About;