const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;
let splashWindow;

app.whenReady().then(() => {
  createSplashScreen();
  createMainWindow();

  setTimeout(() => {
    splashWindow.close();
    mainWindow.show();
    mainWindow.maximize();
  }, 5000);
});

function createSplashScreen() {
  splashWindow = new BrowserWindow({
    width: 500,
    height: 500,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    icon: path.join(__dirname, "..", "public", "logo.png"),
  });

  splashWindow.loadFile(
    path.join(__dirname, "..", "public", "splash-screen.png")
  );
}

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
    autoHideMenuBar: true,
    icon: path.join(__dirname, "..", "public", "logo.png"),
    title: "RASA POS System",
    show: false,
  });

  mainWindow.loadURL("http://localhost:3000");
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
