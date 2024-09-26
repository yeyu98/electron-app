<!--
 * @Author: yeyu98
 * @Date: 2024-09-26 14:16:03
 * @LastEditors: yeyu98
 * @LastEditTime: 2024-09-26 15:35:55
 * @FilePath: \electron-app\README.md
 * @Description: 
-->
### 关于安装electron
需要指定一下electron镜像源 pnpm config set electron_mirror "https://registry.npmmirror.com/-/binary/electron/"


## 模块
### 生命周期
app：用于控制应用程序的生命周期；
whenReady：当electron初始化完成；
window-all-closed：关闭应用监听，一般需要在关闭应用之后退出所有的窗口 需要结合app.quit（window/linux）（难道默认关闭应用的时候不会退出窗口，窗口还在内存中？）;


### 窗口
BrowserView：浏览器窗口相当于一个webview；



### 进程
主进程是一个拥有所有操作系统权限的nodejs环境；
为了安全考虑页面的渲染只能放置在渲染进程中，
渲染进程是一个专门用来渲染界面的进程由于沙盒化进程的存在，渲染进程无法与主进程一样存在于nodejs环境中，
需要通过ipc来对主进程和不同的渲染进程之间通信，调用主进程中的一些能力；


preload脚本
主进程和渲染进程的粘合剂，由于沙盒化的存在，只拥有半残的nodejs能力（部分nodejs的能力）；
会在渲染器加载网页之前注入（注入到渲染器里相当于给渲染器添加了类似`.env`的全局配置变量只不过是从主进程里取的）；