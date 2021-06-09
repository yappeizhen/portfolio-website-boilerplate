import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Thumbnail from './components/Thumbnail';
import Introduction from './components/Introduction';
import { personalInfoData, workExperienceData } from './assets/data/personalInfo';
import { Row, Col } from 'antd';

const App = () => {

  return (
    <div className="App">
      <Header person={personalInfoData} />
      <section className="home-section">
        <Introduction person={personalInfoData} />
      </section>
      <section className="home-section">
        <h2 className="section-title">Work Experience</h2>
        <br />
        <Row gutter={16}>
          <Col lg={12}>
            <Thumbnail experience={workExperienceData.solveware} />
          </Col>
          <Col lg={12}>
            <Thumbnail experience={workExperienceData.aphrodite} />
          </Col>
        </Row>
        <br/>
        <br/>
        <Row gutter={16}>
          <Col lg={12}>
            <Thumbnail experience={workExperienceData.consulting} />
          </Col>
          <Col lg={12}>
            <Thumbnail experience={workExperienceData.peoplesAssociation} />
          </Col>
        </Row>
      </section>
      <section className="home-section">
        <h2 className="section-title">Projects</h2>
        <br />
        <Row gutter={16}>
          <Col lg={12}>
            <Thumbnail experience={workExperienceData.solveware} />
          </Col>
          <Col lg={12}>
            <Thumbnail experience={workExperienceData.solveware} />
          </Col>
        </Row>
      </section>
      <Footer person={personalInfoData} />
    </div>
  );
}

export default App;

