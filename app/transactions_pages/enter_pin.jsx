import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const KeypadButton = ({ label, onPress }) => (
  <TouchableOpacity style={styles.key} onPress={() => onPress(label)}>
    <Text style={styles.keyText}>{label}</Text>
  </TouchableOpacity>
);

export default function EnterPin() {
  const router = useRouter();
  const handleKeyPress = (key) => {
    console.log("Pressed:", key);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: "flex-start",
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          marginBottom: 30,
        }}
      >
        {/* back button */}
        <View style={styles.back_icon}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            onPress={() => router.push("/transactions_pages/send_to_profile")}
          />
        </View>
        <Text style={styles.enterPin}>Enter pin</Text>
      </View>

      <Image
        source={require("../../assets/images/profile_pic.jpg")}
        style={[styles.profile_pic]}
      />
      <Text style={styles.name}>Jane Doe</Text>
      <Text style={styles.balance}>Ksh 31,638.80</Text>

      <View style={styles.keypad}>
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "#", "0", "Del"].map(
          (item, index) => (
            <KeypadButton key={index} label={item} onPress={handleKeyPress} />
          )
        )}
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.cancelBtn}
          onPress={() => router.push("/transactions_pages/send_to_profile")}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendBtn}
          onPress={() => router.push("/transactions_pages/receipt")}
        >
          <Text style={styles.sendText}>Send Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0F1C",
    alignItems: "center",
    paddingTop: 40,
    paddingHorizontal: 30,
  },

  enterPin: {
    color: "#fff",
    fontSize: 16,
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: 30,
    marginVertical: 10,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    marginVertical: 30,
  },
  balance: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  keypad: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  key: {
    width: "30%",
    height: 70,
    backgroundColor: "#1C1E2A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
  },
  keyText: {
    color: "#fff",
    fontSize: 22,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cancelBtn: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
  },
  sendBtn: {
    flex: 1,
    backgroundColor: "#0551fb",
    padding: 15,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
  },
  cancelText: {
    color: "#fff",
    fontSize: 16,
  },
  sendText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  profile_pic: {
    width: 70,
    height: 70,
    borderRadius: 100,
    objectFit: "cover",
  },
});
