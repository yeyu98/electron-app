<!--
 * @Author: yeyu98
 * @Date: 2024-09-26 14:16:03
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-09-26 14:16:19
 * @FilePath: \electron-app\README.md
 * @Description: 
-->
### 关于安装electron
需要指定一下electron镜像源 pnpm config set electron_mirror "https://registry.npmmirror.com/-/binary/electron/"


### 模块
app：用于控制应用程序的生命周期；
whenReady：当electron初始化完成；


BrowserView：浏览器窗口相当于一个webview；