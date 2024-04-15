import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [background, setBackground] = useState("");

  const onPress = () => {
    navigation.navigate("Chat", { name: name, background: background });
  };

  const colors = {
    black: "#090C08",
    magenta: "#474056",
    blue: "#8A95A5",
    green: "#B9C6AE",
  };

  return (
    <ImageBackground
      source={require("../img/BackgroundImage.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.appTitle}>Hello World</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
        ></TextInput>

        <View style={styles.chooseColorBox}>
          <Text style={styles.chooseColorText}>Choose Background Color:</Text>
          <View style={styles.colorButtonsContainer}>
            {/* Render a TouchableOpacity for each color option */}
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color options"
              accessibilityHint="Lets you set your chat background color to black."
              accessibilityRole="Color button"
              style={[
                styles.chooseColor,
                { backgroundColor: colors.black },
                background === colors.black && styles.selectedColor,
              ]}
              // Set the function to handle button press
              onPress={() => setBackground(colors.black)}
            ></TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color options"
              accessibilityHint="Lets you set your chat background color to magenta."
              accessibilityRole="Color button"
              style={[
                styles.chooseColor,
                { backgroundColor: colors.magenta },
                background === colors.magenta && styles.selectedColor,
              ]}
              onPress={() => setBackground(colors.magenta)}
            ></TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color options"
              accessibilityHint="Lets you set your chat background color to blue."
              accessibilityRole="Color button"
              style={[
                styles.chooseColor,
                { backgroundColor: colors.blue },
                background === colors.blue && styles.selectedColor,
              ]}
              onPress={() => setBackground(colors.blue)}
            ></TouchableOpacity>
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="Color options"
              accessibilityHint="Lets you set your chat background color to green."
              accessibilityRole="Color button"
              style={[
                styles.chooseColor,
                { backgroundColor: colors.green },
                background === colors.green && styles.selectedColor,
              ]}
              onPress={() => setBackground(colors.green)}
            ></TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.textButton}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </ImageBackground>
  );
};

// Styles for the Start component
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appTitle: {
    flex: 1,
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
    justifyContent: "center",
    marginTop: 80,
  },
  container: {
    width: "88%",
    height: "44%",
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-evenly",
    borderRadius: 4,
  },

  textInput: {
    width: "84%",
    padding: 10,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    opacity: 0.7,
    borderColor: "#757083",
    borderRadius: 4,
  },
  button: {
    width: "84%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#757083",
    padding: 10,
    marginTop: 5,
    borderRadius: 4,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  chooseColorBox: {
    width: "84%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  colorButtonsContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
  },
  chooseColor: {
    width: 30,
    height: 30,
    borderRadius: 15,
    border: 3,
    marginRight: 15,
    borderColor: "white",
  },
  selectedColor: {
    borderColor: "#FCD95B",
    borderWidth: 3,
  },

  chooseColorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
});

export default Start;
