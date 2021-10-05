import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singIn = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/signal.png")}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          type="email"
          placeholder="Email"
          autoFocus
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          type="password"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChange={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button containerStyle={styles.button} title="Login" onPress={singIn} />
        <Button
          containerStyle={styles.button}
          title="Register"
          type="outline"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 10,
  },

  inputContainer: {
    width: "90%",
  },

  buttonContainer: {
    width: "90%",
  },
  button: {
    margin: 5,
  },
});
