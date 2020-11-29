const { createWindows } = require("./app");
const { app } = require("electron");

app.whenReady().then(createWindows);
