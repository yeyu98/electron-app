/*
 * @Author: yeyu98
 * @Date: 2024-09-26 14:21:28
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-09-26 14:41:33
 * @FilePath: \electron-app\src\main.js
 * @Description: 
 */
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadFile('../index.html')  
}

app.whenReady().then(() => {
  createWindow()
}) 
