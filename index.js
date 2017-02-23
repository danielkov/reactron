const { app, BrowserWindow } = require('electron')

let mainWindow

function createMainWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL(`file://${__dirname}/app/app.html`)
  win.on('closed', onWindowClosed)

  return win
}

function onWindowClosed () {
  mainWindow = null
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (!mainWindow) {
    mainWindow = createMainWindow()
  }
})

app.on('ready', () => {
  mainWindow = createMainWindow()
})
