![image](https://github.com/marwan598/breadfast-technical-assesment/assets/68783558/7be2f9ef-dae5-4aa3-9656-3beea8f39446)



# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.
in this project I am using Expo framework so to start the Metro server run the following commands in your terminal:


```bash
# using npm
npx expo start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. to run the app on a physical device either on android or IOS simply download the Expo Go app on your phone and scan the qr code in your terminal, to run on android emulator or IOS simulator please follow this guide first [Expo - Set up your environment](https://docs.expo.dev/get-started/set-up-your-environment/) and launch your desired simulator and Press ```bash a``` for android or ```bash i``` for IOs


If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.
this appp uses the latest [Expo Router](https://docs.expo.dev/router/introduction/)

The project entry point will be `_layout.tsx` which will have the navigation handling, fonts loading, splash screen controling and main layout of the app

1. Open `index.tsx` in your text editor of choice and edit some lines.
2. React native provide Hot reload functions that makes your changes appear in the running app as soon as you save your changes, if the changes are not there yet simply go to the terminal where the metro server is running and press ```bash r``` for hot restarting 

## Step 4: Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Screenshots of the app
#### Splash Screen
<img src="https://github.com/marwan598/breadfast-technical-assesment/assets/68783558/04a83b0d-33e2-461e-b188-452829d25c0d"  width=20% /> 

#### Home Screen
<img src="https://github.com/marwan598/breadfast-technical-assesment/assets/68783558/fb62c69a-6cc1-4f6e-a06f-c56479b27ea6"  width=20% /> 

#### Posts Details Screen
<img src="https://github.com/marwan598/breadfast-technical-assesment/assets/68783558/44e27693-c5c9-46a5-9f80-78cf15701d18"  width=20% /> 





# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

