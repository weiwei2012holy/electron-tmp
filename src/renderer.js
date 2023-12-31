/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const send = async () => {
    const msg = document.getElementById('msg').value
    const res = await window.config.send(msg)
    alert(res)
}


const sendSystemNotice = async (msg) => {
    return await window.config.sendSystemNotice(msg)
}

