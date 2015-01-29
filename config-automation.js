// This is an example configuration file to be used with ui-screen-shooter
// It is designed to work with the Hello World International application
// Please copy to config-automation.js and edit for your needs
// See also http://cocoamanifest.net/features/#ui_automation for automation help


// Pull in the special function, captureLocalizedScreenshot(), that names files
// according to device, language, and orientation
#import "capture.js"

// Now, we simply drive the application! For more information, check out my
// resources on UI Automation at http://cocoamanifest.net/features
var target = UIATarget.localTarget();
UIALogger.logDebug("Target is " + target.frontMostApp().name());
var window = target.frontMostApp().mainWindow();

var target = UIATarget.localTarget();
var linkReaderApp = target.frontMostApp();
var window = linkReaderApp.mainWindow();

var getStartedButton = window.buttons()["Get Started"];
if (getStartedButton.isValid()) {
// screenshot of splash screen
captureLocalizedScreenshot("getStarted");
window.buttons()["Get Started"].tap();
UIATarget.localTarget().delay(2);

// screenshot of help us improve screen
captureLocalizedScreenshot("helpUsImprove");
window.buttons()["Continue"].tap();
}

UIATarget.localTarget().delay(2);
// screenshot of scan screen
captureLocalizedScreenshot("scan");
UIATarget.localTarget().delay(2);

// screenshot of menu
var menuButton = linkReaderApp.navigationBar().leftButton();

while (!menuButton.checkIsValid()){
  UIATarget.localTarget().delay(2);
}

menuButton.tap();
UIATarget.localTarget().delay(2);
captureLocalizedScreenshot("menu");

var tableView = linkReaderApp.mainWindow().tableViews()[0];

// screenshot of about 
tableView.visibleCells()["About"].tap();
UIATarget.localTarget().delay(2);
captureLocalizedScreenshot("about");

// screenshot of history
target.frontMostApp().navigationBar().buttons()["back icon"].tap();
tableView.visibleCells()["History"].tap();
UIATarget.localTarget().delay(2);
captureLocalizedScreenshot("history");

// screenshot of settings
target.frontMostApp().navigationBar().buttons()["back icon"].tap();
tableView.visibleCells()["Settings"].tap();
UIATarget.localTarget().delay(2);
captureLocalizedScreenshot("settings");

target.frontMostApp().navigationBar().buttons()["back icon"].tap();
tableView.visibleCells()["What can I scan?"].tap();
UIATarget.localTarget().delay(2);
captureLocalizedScreenshot("whatCanIScan");

target.frontMostApp().navigationBar().buttons()["back icon"].tap();
tableView.visibleCells()["Send us feedback"].tap();
UIATarget.localTarget().delay(2);
captureLocalizedScreenshot("feedback");
