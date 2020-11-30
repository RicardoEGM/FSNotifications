const { BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 750,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "ui", "index.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  win.webContents.openDevTools();
}


module.exports = {
  createWindow,
};
