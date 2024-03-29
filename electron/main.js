// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const url = require("url");
const { QUESTEXT } = require("../src/shared/constants");
const spawn = require("child_process").spawn;

let mainWindow;
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      // preload: path.join(__dirname, 'preload.js')
    },
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname:
        process.env.NODE_ENV === "development"
          ? path.join(__dirname, "/../build/index.html")
          : path.join(__dirname, "dist", "index.html"),
      protocol: "file:",
      slashes: true,
    });
  // and load the index.html of the app.
  mainWindow.loadURL(startUrl);
  // Emitted when the window is closed.
  mainWindow.on("closed", function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Minimize window to system tray
  mainWindow.on("minimize", function (event) {
    event.preventDefault();
    mainWindow.hide();
  });
  // Open the DevTools.
  mainWindow.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
let sprocess;
ipcMain.on(QUESTEXT, (event, arg) => {
  if (arg.ttsTool === "") {
    return;
  }

  if (sprocess && sprocess.pid) {
    sprocess.kill();
  }
  sprocess = spawn("python3.10.2", [
    path.join(__dirname, "../", "python/google.py"),
    arg.question,
    JSON.stringify(arg.option),
  ]);

  sprocess.stdout.on("data", (data) => {
    console.log("#######################", data.toString());
  });
  sprocess.on("error", (er) => {
    console.log(er, "$$$$$");
  });
  console.log(arg, arg.ttsTool === "", "@##################@");
});
