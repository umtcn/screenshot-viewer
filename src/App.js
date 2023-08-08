import React, { useState } from 'react';
import screenshotsData from './screenshots.json'; // Assume you have a JSON file with screenshot data
import { ScreenShots } from './components/ScreenShots';
import './App.css';

const App = () => {
  const languages = Object.keys(screenshotsData.languages);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  return (
    <div>
      <h1 className='header'>IOS Application Screenshots</h1>
      <div className="language-dropdown">
        <select id="language-select" onChange={(e) => setSelectedLanguage(e.target.value)}>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div className="screenshot-container">
        <ScreenShots selectedLanguage={selectedLanguage} />
      </div>
    </div>
  );
};

export default App;
