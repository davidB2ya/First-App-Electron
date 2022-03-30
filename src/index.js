'use strict'

// Instanciando los objetos app y BrowserWindow
const { app, BrowserWindow } = require('electron')

// Imprimiendo un mensaje en la consola antes de salir 
app.on('before-quit', () => {
    console.log("Saliendo ...")
})

// Ejecutando ordenes cuando la aplicación esta lista
app.on('ready', () => {
    // Creando una ventana
    let win = new BrowserWindow({
        width : 800,
        height : 600,
        title : 'Electron Pro',
        center : true,
        // maximizable : false
        show : false, 
    })

    win.once('ready-to-show', () => {
        win.show();
    })

    win.on('move', () => {
        const position = win.getPosition()
        console.log(`La posicion es : ${position}`)
    })

    // Detectando el cierre de la ventana para cerrar la aplicación
    win.on('close', () => {
        win = null
        app.quit()
    })


    win.loadURL(`file://${__dirname}/renderer/index.html`)
})

