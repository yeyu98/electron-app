/*
 * @Author: yeyu98
 * @Date: 2024-09-26 14:21:28
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-09-30 11:57:33
 * @FilePath: \electron-app\src\main.js
 * @Description: 
 */
const { app, BrowserWindow, ipcMain, dialog, nativeTheme} = require('electron')
const path = require('node:path')
require('./index')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 把 preload.js 加载进来
    }
  })
  win.webContents.openDevTools()

  ipcMain.on('set-title', (event, title) => {
    // 窗口可能存在多个，这里需要知道是哪个窗口发送过来的信息
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
  })

  // NOTE 注册重置系统主题事件
  ipcMain.on('dark-mode:system', () => {
    console.log('重置')
    nativeTheme.themeSource = 'system'
  })

  // NOTE 加载的时候需要使用path加载否则会出错
  win.loadFile(path.join(__dirname, '../index.html')) 
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  ipcMain.handle('getTitle', () => 'First electron!')
  ipcMain.handle('dialog:openFile', async() => {
    const { canceled, filePaths } = await dialog.showOpenDialog()
    if(!canceled) {
      return filePaths[0]
    }
  })

  // NOTE 注册切换主题事件
  ipcMain.handle('dark-mode:toggle', (_, isLight = true, ...args) => {
    if(isLight) {
      nativeTheme.themeSource = 'light'
    } else {
      nativeTheme.themeSource = 'dark'
    }
  })

  createWindow()
  // macos 如果没有窗口则创建一个
  app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
}) 

// 关闭应用退出窗口
app.on('window-all-closed', () => {
  // darwin macos标识
  if(process.platform !== 'darwin') {
    app.quit()
  }
})