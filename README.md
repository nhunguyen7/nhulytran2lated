
 # Nhuly TRAN2LATED - Desktop App

>Nhuly TRAN2LATED is a desktop app that translates from English to Vietnamese using  Electron.js. Currently, over 600 English words have been translated by Nhu Nguyen. Nhuly TRAN2LATED guarentees the most accurate and natural translations. 
## Installation
Install dependencies
`$ npm install`

(I downloaded NodeJS and  installed NPM)
## Run
To run Electron
`$ npm start`
## Package and Build
Mac
`$ npm run package-mac`

Windows
`$ npm run package-win`

Linux
`$ npm run package-linux`
## About
This project was intended for me to always have the most accurate translations (for when I forget a word), as well as to improve on my Vietnamese skills. Nhuly TRAN2LATED takes an English word, entered by the user, and translates it to Vietnamese. The name of this app is a play on word of my own name. There is a 2 in TRAN2LATED instead of an "S" because Vietnamese people cannot pronounce the "S" since Vietnamese monosyllabic (only having one syllable per word). The 2 also represents the only two languages that are used in this app: English and Vietnamese.
## Usage
The user can either press CMD+A (mac), CTRL+A (windows), or navigate to the menu bar > Files > Add Word. A window will pop up for the user to enter in their word. After the user enters in a word, the window will close and the word will show up on the table in main window with its Vietnamese translation.
At any point that the user wants to delete a row of a word, they can do so by going to the last column in the table and click on the **X**. A pop up window will appear asking the user if they want to delete the row. 
If a user wishes to clear the entire table, they can do so by pressing CMD+K, CTRL+K, or navigate to the menu bar > Files > Clear All.
