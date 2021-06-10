import React from "react";
import Thumbnail from './../components/Thumbnail';
import Introduction from './../components/Introduction';
import Footer from './../components/Footer';

import { personalInfoData, workExperienceData, projectData, socialImpactData } from './../assets/data/personalInfo';
import { Row, Col, Anchor } from 'antd';
const { Link } = Anchor;

function Home() {
    return (
        <>
            <Anchor class="scrollNav">
                <Link href="#profile" title="Profile" />
                <Link href="#work" title="Work" />
                <Link href="#projects" title="Projects" />
                <Link href="#socialImpact" title="Social Impact" />
            </Anchor>
            <div id="profile" />
            <section className="home-section">
                <Introduction person={personalInfoData} />
                <div id="work" />
            </section>
            <section className="home-section">
                <h2 className="section-title">Work Experience</h2>
                <br />
                <Row>
                    <Col lg={12}>
                        <Thumbnail experience={workExperienceData.aphrodite} />
                    </Col>
                    <Col lg={12}>
                        <Thumbnail experience={workExperienceData.solveware} />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={12}>
                        <Thumbnail experience={workExperienceData.consulting} />
                    </Col>
                    <Col lg={12}>
                        <Thumbnail experience={workExperienceData.peoplesAssociation} />
                    </Col>
                </Row>
                <div id="projects" />
            </section>
            <section className="home-section">
                <h2 id="projects" className="section-title">Projects</h2>
                <br />
                <Row>
                    <Col lg={12}>
                        <Thumbnail experience={projectData.mapTheSystem} />
                    </Col>
                    <Col lg={12}>
                        <Thumbnail experience={projectData.perfectMatch} />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={12}>
                        <Thumbnail experience={projectData.sustainathon} />
                    </Col>
                    <Col lg={12}>
                        <Thumbnail experience={projectData.scdfxibm} />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col lg={12}>
                        <Thumbnail experience={projectData.fishbowl} />
                    </Col>
                </Row>
                <div id="socialImpact" />
            </section>
            <section className="home-section">
                <h2 id="socialImpact" className="section-title">Social Impact</h2>
                <br />
                <Row>
                    <Col lg={8}>
                        <Thumbnail size="small" experience={socialImpactData.nusEnablers} />
                    </Col>
                    <Col lg={8}>
                        <Thumbnail size="small" experience={socialImpactData.projectAgritourism} />
                    </Col>
                    <Col lg={8}>
                        <Thumbnail size="small" experience={socialImpactData.connectTuition} />
                    </Col>
                </Row>
            </section>
            <Footer person={personalInfoData} />
        </>
    )
}

export default Home;