// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Create the navigator
const Stack = createNativeStackNavigator();

const App = () => {
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB7Ftb6C7zKf4uOr7TzJjKwr0TwVM1IOj4",
    authDomain: "hello-world-app-c867c.firebaseapp.com",
    projectId: "hello-world-app-c867c",
    storageBucket: "hello-world-app-c867c.appspot.com",
    messagingSenderId: "572786446450",
    appId: "1:572786446450:web:533813e2e6cbb6b21df2eb",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
