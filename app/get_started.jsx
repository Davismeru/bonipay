import { Roboto_800ExtraBold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function get_started() {
  // load fonts
  let [fontsLoaded] = useFonts({
    Roboto_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/*back navigation button */}
      <View>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => router.push("/welcome")}
        />
      </View>

      {/* text content */}
      <View style={styles.text_container}>
        <Text style={styles.logo}>BONIPAY</Text>
        <Text style={[styles.text, styles.bold_text]}>Let's get started</Text>
        <Text style={styles.text}>
          With Bonipay sending and recieving money is easier than ever
        </Text>
      </View>

      {/* signup/signin buttons */}
      <View style={styles.btns}>
        <TouchableOpacity
          style={styles.btn_login}
          onPress={() => router.push("/login")}
        >
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn_signup}
          onPress={() => router.push("/signup")}
        >
          <Text style={{ color: "#1e1e1e" }}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 20,
    flexDirection: "column",
  },

  btns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
  },

  btn_signup: {
    backgroundColor: "white",
    width: 150,
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
  },

  btn_login: {
    width: 150,
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "white",
  },

  text_container: {
    color: "white",
    alignItems: "center",
    height: "80%",
    justifyContent: "center",
  },

  logo: {
    color: "#4e4e4e",
    fontFamily: "Roboto_800ExtraBold",
    fontSize: 50,
    marginBottom: 50,
  },

  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "Roboto_800ExtraBold",
  },

  bold_text: {
    fontSize: 25,
    marginBottom: 30,
  },
});
