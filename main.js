var app = require('app');
var fs = require('fs');
var path = require('path');
var BrowserWindow = require('browser-window')

app.on('ready', function() {
    var mainWindow = new BrowserWindow({
        width : 1100, height : 820, resizable : false
    });
    mainWindow.loadURL('file://' + __dirname + '/index.html')
});

app.on('quit', function () {
    fs.writeFile(path.join(__dirname, 'code.js'), 'var viewer = new Cesium.Viewer(\'cesiumContainer\');\n', function (err) {});
    fs.writeFile(path.join(__dirname, 'loadedData.js'), '', function (err) {});
});

app.on('window-all-closed', function() {
    fs.writeFile(path.join(__dirname, 'code.js'), 'var viewer = new Cesium.Viewer(\'cesiumContainer\');\n', function (err) {});
    if (process.platform != 'darwin') {
        app.quit();
    }
});
