const { contextBridge, ipcRenderer } = require('electron')

// 向窗口window注入versions属性
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'), // 注入ping方法
  getTitle: () => ipcRenderer.invoke('getTitle'), // 注入setTitle方法
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  setTitle: (title) => ipcRenderer.send('set-title', title)
})

contextBridge.exposeInMainWorld('native', {
  toggleTheme: (isLight) => ipcRenderer.invoke('dark-mode:toggle', isLight),
  resetSetting: () => ipcRenderer.send('dark-mode:system'),
  getRequire: () => require
})