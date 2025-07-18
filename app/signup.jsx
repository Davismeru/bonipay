import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import { base_api_uri } from "../assets/constants";

export default function Signup() {
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [otherNames, setOtherNames] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setError("passwords dont match");
    } else {
      try {
        const res = await axios.post(`${base_api_uri}/api/auth/register`, {
          email: email,
          password: password,
          firstName: firstName,
          surname: surname,
          otherNames: otherNames,
          phoneNumber: phoneNumber,
        });

        setError("");
        console.log(res.data);
      } catch (err) {
        const topError = err.response.data.errors[0].msg;
        setError(topError);
        if (!topError) {
          setError(false);
        }
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1e1e1e" }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.logo}>BONIPAY</Text>
          <Text style={[styles.text, styles.login_text]}>
            Create an account
          </Text>
          <Text style={styles.text}>
            Enter your email to signup for this app
          </Text>

          {/* email and password section */}
          <View style={styles.form}>
            <TextInput
              style={[styles.input, styles.text]}
              placeholder="first name"
              placeholderTextColor="gray"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={[styles.input, styles.text]}
              placeholder="surname"
              placeholderTextColor="gray"
              value={surname}
              onChangeText={setSurname}
            />
            <TextInput
              style={[styles.input, styles.text]}
              placeholder="other names"
              placeholderTextColor="gray"
              value={otherNames}
              onChangeText={setOtherNames}
            />
            <TextInput
              style={[styles.input, styles.text]}
              placeholder="phone number"
              placeholderTextColor="gray"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
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

            <TextInput
              style={[styles.input, styles.text]}
              placeholder="confirm password"
              placeholderTextColor="gray"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={true}
            />

            {/* display error if it exists */}
            {error && <Text style={styles.error}>{error}</Text>}

            <TouchableOpacity style={styles.btn_login} onPress={handleSubmit}>
              <Text style={{ color: "white" }}>Continue</Text>
            </TouchableOpacity>
          </View>

          {/* or divider */}
          <View style={styles.or}>
            <View style={styles.line} />
            <Text style={styles.strike_through}>or</Text>
            <View style={styles.line} />
          </View>

          {/* apple and google buttons */}
          <View style={styles.auth_btns}>
            <TouchableOpacity style={styles.auth_btn}>
              <Image
                source={require("../assets/images/google.png")}
                style={styles.auth_logo}
              />
              <Text style={styles.auth_text}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.auth_btn}>
              <Image
                source={require("../assets/images/apple.png")}
                style={styles.auth_logo}
              />
              <Text style={styles.auth_text}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footer_text}>
              By clicking continue, you agree to our
            </Text>
            <Text style={styles.footer_text}>Terms of service</Text>
            <Text style={styles.footer_text}>and</Text>
            <Text style={styles.footer_text}>Privacy Policy</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    flexGrow: 1,
    paddingHorizontal: 30,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
  },
  logo: {
    color: "#4e4e4e",
    fontFamily: "Roboto_800ExtraBold",
    fontSize: 50,
    marginBottom: 20,
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

  or: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  strike_through: {
    marginHorizontal: 10,
    color: "#555",
    fontWeight: "bold",
  },

  auth_btns: {
    width: "100%",
    gap: 10,
  },

  auth_btn: {
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    borderRadius: 6,
    padding: 10,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  auth_text: {
    color: "white",
  },

  auth_logo: {
    height: 30,
    width: 30,
  },

  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },

  footer_text: {
    color: "white",
  },

  error: {
    color: "red",
  },
});
