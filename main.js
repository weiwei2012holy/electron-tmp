// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, screen } = require('electron')

const mainHandler = require('./src/handler');

const path = require('node:path')
const url = require('url');
const isDev = require('electron-is-dev');
console.log('is-dev', isDev)


function isset(v) {
  return v !== null && v !== undefined
}



function createWindow({ route = "", width, height } = {}) {

  // 创建浏览器窗口
  let _workAreaSize = screen.getDisplayNearestPoint(screen.getCursorScreenPoint()).workAreaSize;
  width = width ?? _workAreaSize.width * 0.5
  height = height ?? _workAreaSize.height * 0.9


  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: width,
    height: height,
    minHeight: 600,
    minWidth: 600,
    // frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js')
    }
  })

  // 文件加载路径，不同环境下加载不同的路径
  let url = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`;

  if (route.length > 0) {
    url = url + "#" + route
  }



  // 如果是开发环境下，我们就打开控制台，当然你也可以注释掉
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  // 加载应用
  mainWindow.loadURL(url);


}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow({})

  ipcMain.handle('sendSystemNotice', mainHandler.handlerSendSystemNotice)

  ipcMain.handle('openWindow', (event, window) => createWindow(window))

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

