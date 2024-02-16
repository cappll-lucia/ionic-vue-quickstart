# ionic-vue-quickstart
This repository provides the initial files and configurations needed to kickstart an Ionic Vue project.

## Getting Started
Steps to begin with Ionic Vue Quickstart Template:

1. Clone the Repository:
```
git clone https://github.com/cappll-lucia/ionic-vue-quickstart.git
```

2. Install Dependencies:
```
cd ionic-vue-quickstart
npm install
```

3. Start Development Server:
```
ionic serve
```

4. Begin Coding:
Sart coding your Ionic Vue app by modifying the files located in the src directory. 



## Building web version 
``` bash
# Install dependencies
npm install

# Preview on browser
ionic serve

# Build 
ionic build

```

## Building android app 
> Previous step: Build web version

``` bash
# To add the Android platform to Capacitor project
npx cap add android

# Open android folder in Android Studio
npx cap open android

# To buid .apk file (To install in android using Package Manager)
toolBar > Build > Build Bundle(s) / Apk(s)  > Build APK

# To buid .abb signed file (To upload a new version to Play Store)
toolBar > Build > Generate signet Bundle/Apk  > Build APK  > Android App Bundle 
At this point is necessary to use an existing key store file (use /key.jks at the root of this project)

```



