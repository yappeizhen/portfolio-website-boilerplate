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
                            <h1>Yap Pei Zhen</h1>
                            <p>I am a year 2 undergraduate pursuing a double degree in Economics and Information Systems
                            at the National University of Singapore.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default About;