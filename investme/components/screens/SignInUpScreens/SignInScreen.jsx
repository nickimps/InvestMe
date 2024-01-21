import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import React, { useRef, useState } from "react";
import { COLOURS, SIZES } from "../../../constants";

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);

  const ref_password_input = useRef();

  const handleSignIn = () => {
    console.log("handleSignIn");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ fontSize: SIZES.xxxLarge, color: COLOURS.white }}>Sign In</Text>
          <Text style={{ fontSize: SIZES.medium, color: COLOURS.grey }}>
            Please sign in to continue
          </Text>
        </View>

        <View style={styles.inputFields}>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={(email) => setEmail(email)}
            error={isIncorrect}
            mode="outlined"
            outlineColor={COLOURS.white}
            activeOutlineColor={COLOURS.white}
            textColor={COLOURS.white}
            style={{
              marginTop: SIZES.xxLarge,
              backgroundColor: COLOURS.bg_dark,
              color: COLOURS.white,
            }}
            theme={{
              colors: {
                onSurfaceVariant: "white",
              },
            }}
          />

          <TextInput
            label="Password"
            value={password}
            secureTextEntry
            autoCorrect={false}
            onChangeText={(password) => setPassword(password)}
            error={isIncorrect}
            mode="outlined"
            outlineColor={COLOURS.white}
            activeOutlineColor={COLOURS.white}
            textColor={COLOURS.white}
            style={{ marginTop: SIZES.large, backgroundColor: COLOURS.bg_dark }}
            theme={{
              colors: {
                onSurfaceVariant: "white",
              },
            }}
          />
        </View>

        <TouchableOpacity style={styles.btnContainer} onPress={handleSignIn} disabled={isSigningIn}>
          <View>
            {isSigningIn ? (
              <ActivityIndicator style={{ height: 24 }} size="large" color={COLOURS.bg_white} />
            ) : (
              <Text style={styles.btnText}>Sign In</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: SIZES.xLarge,
  },
  header: {
    alignSelf: "stretch",
  },
  inputFields: {
    alignSelf: "stretch",
  },
  btnContainer: {
    padding: SIZES.small,
    backgroundColor: COLOURS.blue,
    borderRadius: SIZES.xSmall,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: SIZES.xxLarge + 10,
    marginTop: SIZES.xLarge,
  },
  btnText: {
    // fontSize: SIZES.medium + 2,
    color: COLOURS.bg_very_dark,
    paddingHorizontal: SIZES.large,
    // fontFamily: FONT.semibold,
  },
});
