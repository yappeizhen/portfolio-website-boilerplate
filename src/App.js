import './App.css';

import React from 'react';

import { personalInfoData } from './assets/data/personalInfo';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation person={personalInfoData} />
    </div>
  );
}

export default App;
