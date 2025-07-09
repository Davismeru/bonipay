import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const { user_email } = useLocalSearchParams();

  //   hide middle characters of the email
  const handleMaskEmail = () => {
    const [username, domain] = user_email.split("@");
    if (username.length <= 4) {
      return `${username[0]}***${username.slice(-1)}@${domain}`;
    }

    const start = username.slice(0, 2);
    const end = username.slice(-2);
    const middle = "*".repeat(username.length - 4);

    return `${start}${middle}${end}@${domain}`;
  };

  //   split input functionality
  const numInputs = 4;
  const [otp, setOtp] = useState(new Array(numInputs).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (/^[0-9a-zA-Z]?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      // Move to next input if character was entered
      if (text && index < numInputs - 1) {
        inputs.current[index + 1].focus();
      }

      // Move back if cleared
      if (!text && index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = () => {
    const finalCode = otp.join("");
    if (finalCode.length < 4) {
      console.log("code too short");
    } else {
      console.log(finalCode);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <MaterialIcons
          name="mark-email-read"
          size={70}
          color="#1e1e1e"
          onPress={() => router.push("/welcome")}
        />
      </View>
      <Text style={[styles.text, styles.forgot_text]}>Verify Email</Text>
      <Text
        style={[
          styles.text,
          { textAlign: "center", fontSize: 14, paddingHorizontal: 40 },
        ]}
      >
        Please enter the four digit code sent to {"\n"} {handleMaskEmail()}
      </Text>
      <View style={styles.form}>
        {/* split input */}
        <View style={styles.split_input}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              style={styles.input_unit}
              keyboardType="number-pad"
              maxLength={1}
              value={value}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}
        </View>

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

  split_input: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 30,
  },
  input_unit: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
});
