import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const { user_email } = useLocalSearchParams();
  const router = useRouter();
  const handleSubmit = () => {
    console.log("Password:", password);
    router.push({
      pathname: "/login",
      params: { user_email: user_email },
    });
  };

  return (
    <View style={styles.container}>
      {/*back navigation button */}
      <View style={styles.back_icon}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() =>
            router.push({
              pathname: "/verify_email",
              params: { user_email: user_email },
            })
          }
        />
      </View>
      <View style={styles.logo}>
        <FontAwesome5 name="lock-open" size={70} color="#1e1e1e" />
      </View>
      <Text style={[styles.text, styles.forgot_text]}>Create New Password</Text>
      <Text
        style={[
          styles.text,
          { textAlign: "center", fontSize: 14, paddingHorizontal: 40 },
        ]}
      >
        Your New Password Must be Different {"\n"} from previously used
        passwords
      </Text>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, styles.text]}
          placeholder="new password"
          placeholderTextColor="gray"
          value={password}
          onChangeText={setPassword}
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
    flexDirection: "column",
    alignItems: "center",
  },
  back_icon: {
    alignSelf: "start",
    marginBottom: 100,
    marginTop: 20,
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
