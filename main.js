// const electron = require('electron');
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path');
const url = require('url');

let win;

function createWindow () {
    // 创建浏览器窗口。
    win = new BrowserWindow({
        width: 1280,
        height: 800,
        minWidth: 800,
        minHeight: 600,
        frame: false,
        show: false
    })
    win.once('ready-to-show', () => {
        win.show()
    })
    // 然后加载应用的 index.html。
    // win.loadURL(url.format({
    //     pathname: path.join(__dirname, 'index.html'),
    //     protocol: 'file:',
    //     slashes: true
    // }))

    win.loadURL('http://localhost:8080/')

    // 打开开发者工具。
    // win.webContents.openDevTools()

    // 当 window 被关闭，这个事件会被触发。
    win.on('closed', () => {
        // 取消引用 window 对象，如果你的应用支持多窗口的话，
        // 通常会把多个 window 对象存放在一个数组里面，
        // 与此同时，你应该删除相应的元素。
        win = null
    })

    ipcMain.on('win-min', () => {
        win.minimize();
    })
    ipcMain.on('win-max', () => {
        win.maximize();
    })
    ipcMain.on('win-close', () => {
        app.quit();
    })
    ipcMain.on('win-resize', () => {
        win.unmaximize();
    });

}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)
