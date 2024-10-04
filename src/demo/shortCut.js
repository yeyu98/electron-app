/*
 * @Author: yeyu98
 * @Date: 2024-10-04 10:30:23
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-10-04 10:46:25
 * @Description: 
 */
const { Menu, MenuItem, globalShortcut } = require('electron')
// 本地快捷键
const loadLocalShortCut = () => {
    const menu = new Menu()
    menu.append(new MenuItem({
      label: 'Electron',
      submenu: [{
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => {
          console.log('Electron rocks!')
        }
      }]
    }))
    Menu.setApplicationMenu(menu)
}

// 全局快捷键
const loadGlobalShortCut = () => {
    globalShortcut.register('CommandOrControl+I', () => {
        console.log("全局快捷键注册成功", Math.random())
    })
}

module.exports = {
  loadLocalShortCut,
  loadGlobalShortCut
}