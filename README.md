# IOS Application Screenshots - Localization Interface

## About the Project

This project aims to design a simple interface for displaying IOS application screenshots for different localizations (languages).

The project is developed as a Single Page Application (SPA) using React.js. Users can select a language from the dropdown menu, and at the start of the project, it displays the screen sizes and screenshots for the "English" language.

The application uses a JSON data file containing 4 screenshots for specific sizes for each language. If a language does not have a screenshot for a specific size, it checks alternative size screenshots. If the alternative size screenshots are also not available, it checks the same size screenshots in another language. If no screenshots are found in any of these cases, it displays the "No screenshots" text.

## Technologies

- React.js

## Getting Started

1. Clone the repository:

git clone https://github.com/umtcn/screenshot-viewer.git

2. Navigate to the project folder:

cd screenshot-viewer

3. Install dependencies:

npm install

4. Start the application:

npm start

The application will run by default at http://localhost:3000.

## Screenshots

[Screenshots can be added here]

## Contributions
I welcome all kinds of contributions. If you want to improve the project or fix any issues, please open a Pull Request.

## License
This project is licensed under the MIT License. For more information, see the LICENSE file.

## Data File

The language names and size keys in the JSON file should match the languages and sizes used in the project. Screenshots should be specified as arrays. If there are no screenshots for a particular size, the respective field can be an empty array.

The JSON data file can be found in the `src` folder with the name `screenshots.json`. The structure of the file is as follows:

```json
{
  "languages": {
    "English": {
      "IPHONE_67": [/* Array of IPHONE_67 screenshots */],
      "IPHONE_65": [/* Array of IPHONE_65 screenshots */],
      "IPHONE_61": [/* Array of IPHONE_61 screenshots */],
      "IPHONE_58": [/* Array of IPHONE_58 screenshots */],
      "IPHONE_55": [/* Array of IPHONE_55 screenshots */],
      "IPHONE_47": [/* Array of IPHONE_47 screenshots */],
      "IPHONE_40": [/* Array of IPHONE_40 screenshots */]
    },
    /* Screenshots for other languages and sizes */
  }
}
