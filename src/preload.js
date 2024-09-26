const { contextBridge } = require('electron')

// 向窗口window注入versions属性
console.log(process.versions.node)
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})