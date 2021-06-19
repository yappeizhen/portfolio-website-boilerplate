import React from "react";
import Thumbnail from './../components/Thumbnail';
import Introduction from './../components/Introduction';
import Footer from './../components/Footer';
import { personalInfoData, workExperienceData, projectData, socialImpactData } from './../assets/data/personalInfo';
import { Anchor } from 'antd';
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
            </section>
            <h1 id="work" className="section-title">Work Experience</h1>
            <hr className="hr-divider"/>
            <section className="home-section">
                <br />
                <div className="card-display">
                    {workExperienceData.map((item) => (<Thumbnail key={item.name} experience={item} />))}
                </div>
            </section>

            <h1 id="projects" className="section-title">Projects</h1>
            <hr className="hr-divider"/>
            <section className="home-section">
                <br />
                <div className="card-display">
                    {projectData.map((item) => (<Thumbnail key={item.name} experience={item} />))}
                </div>
            </section>

            <h1 id="socialImpact" className="section-title">Social Impact</h1>
            <hr className="hr-divider"/>
            <section className="home-section">
                <br />
                <div className="card-display">
                    {socialImpactData.map((item) => (<Thumbnail key={item.name} experience={item} />))}
                </div>
            </section>
            <Footer person={personalInfoData} />
        </>
    )
}

export default Home;