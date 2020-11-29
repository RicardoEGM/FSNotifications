const { createWindows } = require("./app");
const { app } = require("electron");

require("electron-reload")(__dirname);

app.allowRendererProcessReuse = false;
app
  .whenReady()
  .then(createWindows)
  .catch((err) => {
    console.log(err);
  });

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) {
//     createWindows;
//   }
// });
