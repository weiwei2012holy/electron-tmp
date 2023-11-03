

const { Notification, app, BrowserWindow, ipcMain, screen } = require('electron')

function handlerSendSystemNotice(event, msg) {
    new Notification({
        title: msg.title,
        body: msg.body
    }).show()
}



function handleWindowDrag(event) {
    console.log(event)
    // 只有当鼠标左键按下并且点击的区域是窗口的空白区域时才允许拖动
    if (event.button === 0 && event.target.tagName === 'BODY') {
        const { screenX, screenY } = event;

        // 记录鼠标按下时的坐标
        const initialMousePosition = {
            x: screenX,
            y: screenY,
        };

        // 获取窗口当前的位置
        const { x: windowX, y: windowY } = mainWindow.getBounds();

        // 计算鼠标按下时的窗口偏移量
        const windowOffset = {
            x: screenX - windowX,
            y: screenY - windowY,
        };

        // 监听 "mousemove" 事件，实时更新窗口位置
        const handleMouseMove = (event) => {
            const { screenX, screenY } = event;

            // 计算窗口的新位置
            const newWindowPosition = {
                x: screenX - windowOffset.x,
                y: screenY - windowOffset.y,
            };

            // 移动窗口
            mainWindow.setPosition(newWindowPosition.x, newWindowPosition.y);
        };

        // 监听 "mouseup" 事件，停止拖动
        const handleMouseUp = () => {
            // 停止监听 "mousemove" 和 "mouseup" 事件
            mainWindow.removeListener('mousemove', handleMouseMove);
            mainWindow.removeListener('mouseup', handleMouseUp);
        };

        // 在 "mousemove" 和 "mouseup" 事件上添加监听器，实现拖动功能
        mainWindow.on('mousemove', handleMouseMove);
        mainWindow.on('mouseup', handleMouseUp);
    }
}
// 导出文件处理程序
module.exports = {
    handleWindowDrag,
    handlerSendSystemNotice,
};