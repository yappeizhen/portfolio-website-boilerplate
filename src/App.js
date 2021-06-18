import React from 'react';
import './App.css';
import Header from './components/Header';
import { personalInfoData } from './assets/data/personalInfo';

const App = () => {
  return (
    <div className="App">
      <Header person={personalInfoData} />
    </div>
  );
}

export default App;

