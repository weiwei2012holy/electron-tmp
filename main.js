// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const url = require('url');
const isDev = require('electron-is-dev');
console.log('is-dev',isDev)



function createWindow() {

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  // mainWindow.webContents.on('will-navigate', (event, navigationUrl) => {
  //   // 重写跳转地址
  //   event.preventDefault(); // 阻止默认的跳转行为

  //   // 在这里根据需要进行跳转地址的重写处理
  //   // 例如，将所有跳转重定向到特定的目标地址

  //   let newFile = event.url.replace()
  //   if (newFile.startsWith('file')) {
  //     newFile = newFile.replace('file://', '')
  //     newFile = newFile.replace(__dirname, '')
  //     if (newFile.startsWith('/')) {
  //       newFile = newFile.substring(1)
  //     }
  //     if (newFile.length == 0) {
  //       newFile = 'index'
  //     }
  //     newFile = newFile + '.html'
  //   }
  //   console.log(event.url, newFile)
  //   mainWindow.loadFile(newFile)
  // });

  // 文件加载路径，不同环境下加载不同的路径
  const url = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, './build/index.html')}`;

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
  createWindow()
  ipcMain.handle('send', (e, msg) => {
    return "收到消息:" + msg
  })

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
