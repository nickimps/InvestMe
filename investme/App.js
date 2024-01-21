import { StyleSheet, SafeAreaView, Platform, StatusBar, View } from "react-native";
import { SignInScreen } from "./components";
import { COLOURS, SIZES } from "./constants";
import * as NavigationBar from "expo-navigation-bar";
import * as Device from "expo-device";

export default function App() {
  // Set the navigation bar to be the same colour
  Device.osName == "Android" && NavigationBar.setBackgroundColorAsync(COLOURS.bg_normal);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={COLOURS.bg_normal} barStyle={"light-content"} />
      <View style={styles.insideView}>
        {/* <SignInScreen /> */}
        <View></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLOURS.bg_normal,
  },
  insideView: {
    flex: 1,
    paddingHorizontal: SIZES.medium,
  },
});
