import screenshotsData from '../screenshots.json'; // Assume you have a JSON file with screenshot data
import React from 'react';

// eslint-disable-next-line react/prop-types
export const ScreenShots = ({selectedLanguage}) => {
    const sizes = Object.keys(screenshotsData.languages.English);
  
    // Function to get the appropriate screenshots for a specific language and size
    const getScreenshots = (language, size) => {
      const languageData = screenshotsData.languages[language];
      if (languageData[size].length > 0) {
        return {result: languageData[size], alternative: false};
      } else if (size > 'IPHONE_55') {
        const alternativeSize = 'IPHONE_65';
        if (languageData[alternativeSize].length > 0) {
          return {result: languageData[alternativeSize], alternative : alternativeSize};
        } else if (screenshotsData.languages.English[alternativeSize].length > 0) {
          return {result: screenshotsData.languages.English[alternativeSize], alternative: alternativeSize, english: true}
        } else {
          return null;
        }
      } else {
        const alternativeSize = 'IPHONE_55';
        if (languageData[alternativeSize].length > 0) {
          return {result: languageData[alternativeSize], alternative: alternativeSize};
        } else if (screenshotsData.languages.English[alternativeSize].length > 0) {
          return {result: screenshotsData.languages.English[alternativeSize], alternative: alternativeSize, english: true}
        } else {
          return null;
        }
      }
    };
  
    // Function to check if the screenshots are from the alternative size
    const isUsingAlternativeSize = (size, screenshots) => {
      return size !== 'IPHONE_55' && screenshots && screenshots.alternative && screenshots !== screenshotsData.languages.English[size];
    };
  
    return (
      <div className='container'>
        {sizes.map((size) => (
          <div key={size} className="screenshot-size">
            <h3 style={{textAlign: "left"}}>{size.replace('_', ' ').toLowerCase()}&quot; Display</h3>
            <div className="screenshots">
                <div className='warning-text'>
                    {isUsingAlternativeSize(size, getScreenshots(selectedLanguage, size)) && (
                    <p>Using Alternative Size {getScreenshots(selectedLanguage, size).english ? 'English' : null}  {getScreenshots(selectedLanguage, size).alternative} Display</p>
                    )}
                </div>
                <div className='images'>
                    {getScreenshots(selectedLanguage, size) ? (
                    getScreenshots(selectedLanguage, size).result.map((screenshot, index) => (
                        <img
                        key={index}
                        src={screenshot}
                        alt={`${selectedLanguage} ${size} screenshot ${index + 1}`}
                        />
                    ))
                    ) : (
                    <p>No screenshots</p>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>
    );
}
