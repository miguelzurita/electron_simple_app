const electron = require('electron');
const url = require("url");
const path = require('path');

const {app, BrowserWindow, Menu, globalShortcut} = electron;

let mainWindow;

//listen for app to be ready
app.on('ready', function () {
	mainWindow = new BrowserWindow({});
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'main.html')
		, protocol: 'file'
		, slashes: true
	}));

	//registro global https://electronjs.org/docs/api/global-shortcut
	globalShortcut.register('CommandOrControl+Shift+T', () => {
		console.log('CommandOrControl+Shift+T is pressed');
		//https://stackoverflow.com/a/36973252
		mainWindow.show();
	});

	const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
	Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [
	{
		label: 'File'
	},
	{
		label: 'Exit',
		accelerator: process.platform == 'darwin' ? 'Command + Q' : 'Ctrl+Q',
		click() {
			app.quit();
		}


	}
];