/*
 * @Author: yeyu98
 * @Date: 2024-09-26 15:42:19
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-10-04 10:49:25
 * @FilePath: \electron-app\src\renderer.js
 * @Description: 
 */

window.onload = async () => {
  // 获取标题
  document.title = await versions.getTitle()
  // 设置系统版本
  const versionsContainer = document.querySelector('.versions')
  versionsContainer.innerText =  `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`
  // 获取文件路径
  const btn = document.querySelector('.btn')
  btn.addEventListener('click', async() => {
    console.log(123)
    const resp = await versions.openFile()
    console.log('🥳🥳🥳 ~~ btn.addEventListener ~~ resp--->>>', resp)
  })
  // 设置标题
  const input = document.querySelector('.input')
  const change = document.querySelector('.change')
  change.addEventListener('click', async() => {
    versions.setTitle(input.value)
  })
  // ipc通信
  const handlePing = () => {
    versions.ping().then(res => {
      console.log(res)
    })
  }
  handlePing()

  /**************** 示例专用 ***********************/ 
  // 1 Dark Mode
  const toggleTheme = document.querySelector('.toggle-theme')
  const resetSetting = document.querySelector('.reset-setting')
  
  toggleTheme.addEventListener('click', () => {
    window.native.toggleTheme()
  })
  
  resetSetting.addEventListener('click', () => {
    isLight = true
    window.native.resetSetting()
  })

  // 2 设备访问（暂放）
  // 3 键盘快捷键
  window.addEventListener('keyup', (event) => { 
    console.log(`You pressed ${event.key}`)
  }, true)
  
















}

