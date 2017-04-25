# Sample PWA
This is a simple Progressive Web Application (PWA) created to demonstrate how one can create PWA using Sencha Ext JS and Sencha Cmd. 

![Sample Ext JS PWA](https://github.com/ajit-kumar-azad/sample-pwa/blob/master/assets/sencha_pwa_recording.gif "Sample Ext JS PWA")

## Pre-requisites
 * Sencha Ext JS - This has been tested with 6.2 version
 * Sencha Cmd - 6.5+
 * Google Chrome Browser - 56+
 * Android - 5.0+
 * WebServer (with HTTPS support)

## To Run This Application
1. Clone the repo
2. `cd /local/folder/`
3. Run the following command to add Ext JS SDK to the application:
 ```
 sencha app install --frameworks /path/to/extjs/sdk/folder
 ```
4. Run the following command to build the application:
 ```
 sencha app build
 ```
 5. Deploy `./build/production/PWA` folder to a WebServer (preferably serving HTTPS)
 6. Access the application in Chrome browser on your Android device and test PWA scenarios:
   * When Online
     1. Open application in browser
     2. Add to Home
     3. Launch application from Home screen
   * When Offline
     1. Open application in browser
     2. Add to Home
     3. Launch application from Home screen
