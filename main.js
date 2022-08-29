const { app, BrowserWindow } = require('electron')
require('update-electron-app')()
const path = require('path')

const createWindow = () => {
     const win = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
     })
   
     win.loadFile('index.html')
   }


   app.whenReady().then(() => {
     createWindow()
     createWindow()
   })

   console.log(process.version)

   app.on("window-all-closed" ,(e)=>{
          console.log('closing window ')
   } )