## Chat App

The chat app is for mobile devices using React Native. The app will provide users with a chat interface and options to chat, share images and their location.

## User Stories

● As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family.

● As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.

● As a user, I want to send images to my friends to show them what I’m currently doing.

● As a user, I want to share my location with my friends to show them where I am.

● As a user, I want to be able to read my messages offline so I can reread conversations at any
time.

● As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.

## Technology Stack

- **React Native** : Framework for building cross-platform mobile applications using JavaScript and React.
- **Expo** : Platform that simplifies the development of universal, native-quality mobile apps using JavaScript and React Native.
- **Google Firestore Database / Authentication / Cloud Storage** : Offers a scalable NoSQL database, authentication services, and cloud storage for building real-time.
- **Gifted Chat library** : React Native library providing customizable UI components for creating feature-rich messaging applications.
- **Expo ImagePicker API / Location API** : ImagePicker API enables integration of camera and photo library functionalities, while Location API allows to access GPS services for location-based features in Expo apps.

## Getting started

### 1. Make sure you have Expo CLI installed

```
npm install -g expo-cli
```

### 2. Database configuration

- Please cretae a Firebase Account & then a new project in the Firebase console: https://console.firebase.google.com/
- Cloud Firestore DB: Initialize a new database and set its rules to: allow read, write: if **true**;
- Firebase Authentication: Activate anonymous authentication for the app.
- Firebase Storage: Activate storage by clicking on "Start now" and set its rules to: allow read, write: if **true**;
- Configuration: Under the project settings, add a new app and follow the steps provided by Firebase until you obtain the configuration code.

```
  const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

- Add this code to your main component and configure it in your app.

```
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
```

### 3. Installation

#### Clone the repository:

```
git clone https://github.com/melvinshook/hello-world.git
```

#### Change the directory:

```
cd chat
```

#### Install the dependencies

```
npm install
```

#### Run the server

```
npm start
```

### Screenshots of the project

<img src="../img/IMG_7086.png"  width="300">
