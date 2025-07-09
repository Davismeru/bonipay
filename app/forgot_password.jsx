import { Fontisto } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    console.log("Email:", email);
    router.push({
      pathname: "/verify_email",
      params: { user_email: email },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Fontisto
          name="locked"
          size={70}
          color="#1e1e1e"
          onPress={() => router.push("/welcome")}
        />
      </View>
      <Text style={[styles.text, styles.forgot_text]}>Forgot Password</Text>
      <Text
        style={[
          styles.text,
          { textAlign: "center", fontSize: 14, paddingHorizontal: 40 },
        ]}
      >
        Please Enter Your Email Address To Recieve a Verification Code
      </Text>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, styles.text]}
          placeholder="email@domain.com"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.btn_send} onPress={handleSubmit}>
          <Text style={{ color: "white" }}>send</Text>
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
    alignItems: "center",
    paddingTop: 150,
  },
  logo: {
    backgroundColor: "#fefefe",
    width: 130,
    height: 130,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  form: {
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
    marginBottom: 30,
  },

  forgot_text: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
  },

  btn_send: {
    backgroundColor: "#0551fb",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});
