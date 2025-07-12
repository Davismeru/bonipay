import { Ionicons, Octicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {} from "react-native-gesture-handler";

export default function Confirmation() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* back button */}
      <View style={styles.back_icon}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => router.push("/kyc_pages/selfie_photo")}
        />
      </View>

      <Text style={styles.text_confirm}>Confirmation</Text>

      <View style={styles.main}>
        <Octicons name="check-circle-fill" size={60} color="green" />

        <Text style={styles.text_done}>Done</Text>

        <Text style={styles.instructions}>
          Your personal details have been verified please move on to dashboard
          and enjoy seemless payment services
        </Text>

        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btn_proceed}
            onPress={() => router.push("/signup")}
          >
            <Text style={{ color: "white" }}>back</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn_back}
            onPress={() => router.push("/transactions_pages/dashboard")}
          >
            <Text style={{ color: "white" }}>proceed</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: "#1e1e1e",
  },

  back_icon: {
    marginBottom: 20,
  },

  btns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },

  btn_back: {
    backgroundColor: "#0551fb",
    width: 150,
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 5,
  },

  btn_proceed: {
    width: 150,
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "white",
  },

  text_confirm: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 30,
  },

  main: {
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: "50%",
    gap: 20,
  },

  text_done: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },

  instructions: {
    color: "white",
  },
});
