import React from "react"
import { Row, Col } from 'antd';

function About(props) {
    const { person } = props;
    return (
        <>
            <section className="about-section">
                <Row>
                    <Col lg={12}>
                        <div style={{ display: "inline" }}>
                            <img className="about-pic" alt="Profile" src={person.img} />
                        </div>
                    </Col>
                    <Col lg={11}>

                    </Col>
                </Row>
            </section>
        </>
    )
}

export default About;