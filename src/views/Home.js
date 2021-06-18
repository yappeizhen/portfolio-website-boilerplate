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
            <section className="home-intro-section">
                <Introduction person={personalInfoData} />
                <div id="work" />
            </section>
            <section className="home-section">
                <h2 className="section-title">Work Experience</h2>
                <br />
                <div className="card-display">
                    {workExperienceData.map((item) => (<Thumbnail experience={item} />))}
                </div>
            </section>
            <section className="home-section">
                <h2 id="projects" className="section-title">Projects</h2>
                <br />
                <div className="card-display">
                    {projectData.map((item) => (<Thumbnail experience={item} />))}
                </div>
                <div id="socialImpact" />
            </section>
            <section className="home-section">
                <h2 id="socialImpact" className="section-title">Social Impact</h2>
                <br />
                <div className="card-display">
                    {socialImpactData.map((item) => (<Thumbnail size="small" experience={item} />))}
                </div>
            </section>
            <Footer person={personalInfoData} />
        </>
    )
}

export default Home;