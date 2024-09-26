/*
 * @Author: yeyu98
 * @Date: 2024-09-26 15:42:19
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-09-26 17:00:18
 * @FilePath: \electron-app\src\renderer.js
 * @Description: 
 */

window.onload = async () => {
  document.title = await versions.getTitle()
  
  const versionsContainer = document.querySelector('.versions')
  versionsContainer.innerText =  `本应用正在使用 Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), 和 Electron (v${versions.electron()})`

  const btn = document.querySelector('.btn')
  btn.addEventListener('click', async() => {
    console.log(123)
    const resp = await versions.openFile()
    console.log('🥳🥳🥳 ~~ btn.addEventListener ~~ resp--->>>', resp)
  })

  const input = document.querySelector('.input')
  const change = document.querySelector('.change')
  change.addEventListener('click', async() => {
    versions.setTitle(input.value)
  })



  const handlePing = () => {
    versions.ping().then(res => {
      console.log(res)
    })
  }

  handlePing()
}

