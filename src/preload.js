/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('config', {
  version: () => '1.0.1',

  send: (msg) => ipcRenderer.invoke('send', msg),

  sendSystemNotice: (msg) => ipcRenderer.invoke('sendSystemNotice', msg),
  
  openWindow: (window) => ipcRenderer.invoke('openWindow', window)

})

