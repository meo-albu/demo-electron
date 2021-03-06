import { app, Menu, ipcMain } from 'electron';
import serve from 'electron-serve';
import { createWindow } from './helpers';

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

const windows = {
  mainWindow: null,
  settingsWindow: null
}

const menuItems = [
  {
    label:'File',
    submenu: [
      {
        label: 'Settings',
        click: () => openSettings()
      },
      {
        label: 'Close',
        click: () => app.quit()
      },
      {
        label: 'Dev Menu',
        click: () => windows.mainWindow.webContents.openDevTools(),
      },
    ]
  }
]

const mainMenu = Menu.buildFromTemplate(menuItems)

const openSettings = () => {
  windows.settingsWindow = createWindow('settings', {
    width: 600,
    height: 400,
    frame: false,
    resizable: false,
    alwaysOnTop: true
  })

  if (isProd) {
    windows.settingsWindow.loadURL('app://./settings.html');
  } else {
    const port = process.argv[2];
    windows.settingsWindow.loadURL(`http://localhost:${port}/settings`);
  }
}

(async () => {
  await app.whenReady()

  windows.mainWindow = createWindow('main', {
    width: 1000,
    height: 600,
    frame: false
  })

  if (isProd) {
    await windows.mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await windows.mainWindow.loadURL(`http://localhost:${port}/home`);
  }

  Menu.setApplicationMenu(mainMenu)
})()

ipcMain.on('close-settings', () => {
  windows.settingsWindow.close()
})
ipcMain.on('close-app', () => {
  app.quit()
})
ipcMain.on('minimize-app', () => {
  windows.mainWindow.minimize()
})
ipcMain.on('maximize-app', () => {
  if(windows.mainWindow.isMaximized()) {
    windows.mainWindow.unmaximize()
  } else {
    windows.mainWindow.maximize()
  }
})

ipcMain.on('client-ready', (event) => {
  event.sender.send('menu', null, JSON.stringify(Menu))
  mainMenu.popup({
    window: windows.mainWindow,
    x: 18,
    y: 18,
  })
})

app.on('window-all-closed', () => {
  app.quit()
})