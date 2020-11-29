const { BrowserWindow } = require("electron");

const window = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    nodeIntegration: true,
  },
});

window.loadFile("/ui/index.html");
module.exports = {
  createWindows,
};
