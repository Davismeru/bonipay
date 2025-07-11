import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    // Handle validation, submission, etc.
  };
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/*back navigation button */}
      <View style={styles.back_icon}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => router.push("/get_started")}
        />
      </View>
      <Text style={styles.logo}>BONIPAY</Text>
      <Text style={[styles.text, styles.login_text]}>Login</Text>
      <Text style={styles.text}>Enter your email and password to login</Text>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, styles.text]}
          placeholder="email@domain.com"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.text]}
          placeholder="password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.btn_login} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Login</Text>
        </TouchableOpacity>

        {/* forgot password link */}
        <Text style={styles.forgot_password}>
          Forgot password?{" "}
          <Link href={"/forgot_password"} style={styles.forgot_link}>
            Click here
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    height: "100%",
    paddingHorizontal: 30,
    flexDirection: "column",
    alignItems: "center",
  },

  back_icon: {
    alignSelf: "start",
    marginBottom: 80,
    marginTop: 20,
  },

  logo: {
    color: "#4e4e4e",
    fontFamily: "Roboto_800ExtraBold",
    fontSize: 50,
    marginBottom: 50,
  },
  form: {
    padding: 20,
    gap: 10,
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaaa",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  text: {
    color: "white",
  },

  login_text: {
    fontWeight: "bold",
    fontSize: 20,
  },

  btn_login: {
    backgroundColor: "#0551fb",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },

  forgot_password: {
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },

  forgot_link: {
    color: "#0551fb",
    textDecorationLine: "underline",
  },
});
