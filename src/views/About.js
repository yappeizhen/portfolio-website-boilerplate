import React from "react"
import { Row, Col } from 'antd';

function About(props) {
    const { person } = props;
    return (
        <>
            <div className="about-section">
                <Row>
                    <Col lg={11}>
                        <div style={{ display: "inline" }}>
                            <img className="about-pic" alt="Profile" src={person.img1} />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="about-me-intro">
                            <h1>{person.lastName} {person.firstName}</h1>
                            <p>{person.aboutIntro}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default About;