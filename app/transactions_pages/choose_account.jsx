import { Entypo, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {} from "react-native-gesture-handler";

export default function ChooseAccount() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* back button */}
      <View style={styles.back_icon}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => router.push("/transactions_pages/accounts")}
        />
      </View>

      <Text style={styles.text_confirm}>Send money</Text>

      <View style={styles.main}>
        <Entypo name="dots-three-horizontal" size={60} color="white" />

        <Text style={styles.text_done}>Choose Account</Text>

        <Text style={styles.instructions}>
          Please choose an account of the party you want to add.
        </Text>

        <View style={styles.btns}>
          <TouchableOpacity
            style={styles.btn_card}
            onPress={() => router.push("/transactions_pages/bank_account")}
          >
            <Text style={{ color: "white" }}>Bank Account</Text>
            <Entypo name="credit-card" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btn_mobile}
            onPress={() => router.push("/transactions_pages/mobile_wallet")}
          >
            <Text style={{ color: "white" }}>Mobile Wallet</Text>
            <Entypo name="mobile" size={20} color="white" />
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

  btn_mobile: {
    backgroundColor: "#0551fb",
    width: 150,
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  btn_card: {
    width: 150,
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "white",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
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
    fontWeight: "bold",
    textAlign: "center",
  },
});
