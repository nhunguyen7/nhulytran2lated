// Javascript code for the menu, mainwindow, and add window

const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function()
{
  // Create new window
  mainWindow = new BrowserWindow(
    {
    // Added this because it gave me a "Uncaught ReferenceError: required is not defined"
    // This fixed that error
    webPreferences:
    {
      nodeIntegration: true,
      contextIsolation: false
    },
  });

  // Load html into window
  mainWindow.loadURL(url.format
  ({
      pathname: path.join(__dirname, 'mainWindow.html'),
      protocol: 'file:',
      slashes: true
  }));

  // Quit app when closed
  mainWindow.on('closed', function()
  {
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Handle create add window
function createAddWindow()
{
  // Create new window
  addWindow = new BrowserWindow(
  {
      width: 200,
      height: 300,
      title: "Word",

      // Added this because it gave me a "Uncaught ReferenceError: required is not defined"
      // This fixed that error
      webPreferences:
      {
        nodeIntegration: true,
        contextIsolation: false
      },
  });

  // Load html into window
  addWindow.loadURL(url.format
  ({
      pathname: path.join(__dirname, 'addWindow.html'),
      protocol: 'file:',
      slashes: true
  }));

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // Insert menu
  Menu.setApplicationMenu(mainMenu);

  // Garbage collection handle--to optimize
  addWindow.on('close', function()
  {
    addWindow = null;
  });
}

// Catch word:add CHANGE THIS; COMMENTED THIS OUT FROM ORIGINAL SEND WORD TO MAINWINDOW
ipcMain.on('word:add',function(e, word)
{
   // caught in mainWindow.html
  mainWindow.webContents.send('word:add', word);
  addWindow.close();
});

// Create menu template
const mainMenuTemplate =
[
  {
    label:'File',
    submenu: [
      {
        label: 'Add Word',
        accelerator: process.platform == 'darwin' ? 'Command+A' : 'Ctrl+A',
        click()
        {
          createAddWindow();
        }
      },
      {
        label: 'Clear All',
        accelerator: process.platform == 'darwin' ? 'Command+K' : 'Ctrl+K',
        click()
        {
          mainWindow.webContents.send('word:clear');
        }
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click()
        {
          app.quit(); // Quits out of the application
        }
      }
    ]
  }
];

mainMenuTemplate.push
({
  label: 'Developer Tools',
  submenu:[
  {
    label: 'Toggle DevTools',
    accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
    click(word, focusedWindow)
    {
      focusedWindow.toggleDevTools();
    }
  },
  {
    role: 'reload'
  }
  ]
  }
);

// Will create a "File" menu option on mac;
// If not, it will exist as "Nhuly-TRAN2LATED instead"
if(process.platform == 'darwin')
{
  mainMenuTemplate.unshift({label: ''});
}
