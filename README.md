# Angular Firebase Login
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

1) create a firebase project
2) enable google login
3) create 4 apps (2 webs/android/ios) , appid for android and ios should be same and will be used in following steps
4) copy firebase parameter from web (firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };) to src/environment folder. environment.ts and environment.prod.ts for 2 webs,
5) setup dynamic links 
6) run `cordova plugin remove cordova-plugin-customurlscheme  --variable URL_SCHEME=com.example.angularfirelogin`
7) run `cordova plugin add cordova-plugin-customurlscheme  --variable URL_SCHEME=IOS_BUNDLE_ID_ANDROID_PACKAGE_ID_CREATED_IN_STEP_3`
8) edit config.xml file,update `widget id` to IOS_BUNDLE_ID_ANDROID_PACKAGE_ID_CREATED_IN_STEP_3, 
<widget id="com.clinictimeslots.wwwq" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>ClinicTimeslots</name>

<widget id="IOS_BUNDLE_ID_ANDROID_PACKAGE_ID_CREATED_IN_STEP_3" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>IOS_ANDROID_CUSTOMIZED_PROJECT_NAME</name>
IOS_ANDROID_CUSTOMIZED_PROJECT_NAME will be used to generate IOS project code under platforms/ios folder for a few folders' name

9) update <universal-links>
      <host name="angularfirelogin.page.link" scheme="https" />
      <host name="angularfirelogin-94117.firebaseapp.com" scheme="https">
        <path url="/__/auth/callback"/>
      </host>
    </universal-links>
    to 
    <universal-links>
      <host name="DYNAMIC_LINKS_DOMAIN_CREATED_IN_STEP_5" scheme="https" />
      <host name="authDomain_CREATED_IN_STEP_4_FIREBASE_PARAMETERS" scheme="https">
        <path url="/__/auth/callback"/>
      </host>
    </universal-links>

10) run cordova platform remove ios
11) run cordova platform remove android
12) run cordova platform add ios
13) run cordova platform add android
14) ng build
15) replace www/index.html file <body>...</body> part with below:(this may break some buttons,but it will at least work. need investigation) 
<body>
  <app-root></app-root>
  <script src="runtime-es2015.js" type="text/javascript"></script>
  <script src="runtime-es5.js" type="text/javascript" defer></script>
  <script src="polyfills-es5.js" type="text/javascript" defer></script>
  <script src="polyfills-es2015.js" type="text/javascript"></script>
  <script src="styles-es2015.js" type="text/javascript"></script>
  <script src="styles-es5.js" type="text/javascript" defer></script>
  <script src="vendor-es2015.js" type="text/javascript"></script>
  <script src="vendor-es5.js" type="text/javascript" defer></script>
  <script src="main-es2015.js" type="text/javascript"></script>
  <script src="main-es5.js" type="text/javascript" defer></script>
</body>

16) cordova run android
17) cordova run ios

Reference:
https://www.linkedin.com/pulse/angular-2-build-your-mobile-app-using-cordova-eran-hadad/
https://github.com/nordnet/cordova-universal-links-plugin/commit/b2c5784764225319648e26aa5d3f42ede6d1b289#diff-d5955d9f4d88b42e5efd7a3385be79e9
https://github.com/angular/angularfire/blob/master/docs/ionic/authentication.md
https://firebase.google.com/docs/auth/web/cordova
https://stackoverflow.com/questions/53783142/permission-denied-error-in-xcode-10-preventing-build-command-phasescriptexecut
https://cordova.apache.org/docs/en/latest/guide/cli/
