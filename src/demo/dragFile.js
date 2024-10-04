const {ipcMain} = require('electron')
const fs = require('node:fs')
const path = require('node:path')
const https = require('node:https')

const registerDragFile = () => {
    const iconName = path.join(__dirname, '../../assets/icon/icon.png')
    // const icon = fs.createWriteStream(iconName)
    // https.get('https://img.icons8.com/ios/452/drag-and-drop.png', (res) => {
    //     res.pipe(icon)
    // })


    // fs.writeFileSync(path.join(__dirname, '../../assets/md/drag-1.md'),  '# First file to test drag and drop')
    // fs.writeFileSync(path.join(__dirname, '../../assets/md/drag-2.md'),  '# Second file to test drag and drop')

    ipcMain.on('ondragstart', (event, filename) => {
        console.log("✨✨🥰  ~ ipcMain.on ~ filename--->>>", filename)
        event.sender.startDrag({
            file: path.join(__dirname, `../../assets/md/${filename}`),
            icon: iconName
        })
    })
}

module.exports = {
    registerDragFile
}