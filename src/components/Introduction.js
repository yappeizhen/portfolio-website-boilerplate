import React from "react"
import { Row, Col } from 'antd';

function Introduction(props) {
    const { person } = props;
    return (
        <>
            <Row>
                <Col lg={12}>
                    <div className="intro-text">
                        <h2>Hello!</h2>
                        <br/>
                        <h1 style={{ margin: '0' }}>I'm <span style={{ color: "#ce4c92" }}>{person.firstName}</span>,</h1>
                        <h1>{person.areaOfInterest}</h1>
                    </div>
                </Col>
                <Col lg={11}>
                    <div style={{ display: "inline" }}>
                        <img className="profile-pattern" alt="pink dotted pattern" src={person.profilePattern} />
                        <img className="profile-pic" alt="Profile" src={person.img} />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default Introduction;