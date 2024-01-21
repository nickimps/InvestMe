import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { COLOURS } from "./constants/theme";

export default function App() {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text style={{ color: COLOURS.white }}>Open up App.js to start working on your app!!</Text>
        <Text style={{ color: COLOURS.grey }}>Open up App.js to start working on your app!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOURS.bg_normal,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
