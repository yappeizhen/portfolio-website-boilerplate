import React from "react"
import { Row, Col } from 'antd';

function About(props) {
    const { person } = props;
    return (
        <>
            <section className="about-section">
                <Row>
                    <Col lg={11}>
                        <div style={{ display: "inline" }}>
                            <img className="about-pic" alt="Profile" src={person.img} />
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div>
                            <h1>Yap Pei Zhen</h1>
                            <p>I am a year 2 undergraduate pursuing a double degree in Economics and Information Systems
                            at the National University of Singapore.</p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default About;