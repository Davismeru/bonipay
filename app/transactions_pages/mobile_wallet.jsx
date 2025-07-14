import { Entypo, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MobileWallet() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    nationality: "",
    mobileWalletType: "",
    phoneNumber: "",
  });

  const handleSubmit = () => {
    console.log(formData);
    router.push("/kyc_pages/proof_of_identity");
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
          {/* back button */}
          <View style={styles.back_icon}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="white"
              onPress={() => router.push("/transactions_pages/choose_account")}
            />
          </View>

          {/* header */}
          <View style={styles.header}>
            <View>
              <Text style={[styles.header_text, styles.header_text_bold]}>
                Mobile Wallet Details
              </Text>
            </View>
            <LinearGradient
              style={styles.icon_section}
              colors={["#ffafbd", "#ffc3a0"]}
            >
              <View style={styles.inner_section}>
                <Entypo name="mobile" size={20} color="white" />
              </View>
            </LinearGradient>
          </View>

          <Text style={styles.instructions}>
            Write your full name,Country of origin(Nationality).We will verify
            your the existence of the details before continuing.
          </Text>

          <View style={styles.form}>
            <TextInput
              placeholder={"Full Name*"}
              placeholderTextColor="gray"
              value={formData.fullName}
              onChangeText={(text) =>
                setFormData({ ...formData, fullName: text })
              }
              style={styles.input}
            />

            <TextInput
              placeholder="Nationality*"
              placeholderTextColor="gray"
              value={formData.nationality}
              onChangeText={(text) =>
                setFormData({ ...formData, nationality: text })
              }
              style={styles.input}
            />

            <TextInput
              placeholder="Mobile Wallet Type*"
              placeholderTextColor="gray"
              value={formData.mobileWalletType}
              onChangeText={(text) =>
                setFormData({ ...formData, mobileWalletType: text })
              }
              style={styles.input}
            />

            <TextInput
              placeholder="+90 34567895*"
              placeholderTextColor="gray"
              value={formData.phoneNumber}
              onChangeText={(text) =>
                setFormData({ ...formData, phoneNumber: text })
              }
              style={styles.input}
            />
          </View>

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.button_text}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: "#1e1e1e",
    justifyContent: "flex-start",
  },

  back_icon: {
    marginBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4e4e4e",
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    marginBottom: 30,
  },

  header_text: {
    color: "white",
    fontSize: 16,
  },
  header_text_bold: {
    fontWeight: "bold",
  },

  icon_section: {
    width: 70,
    height: 70,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
  },

  inner_section: {
    width: 60,
    height: 60,
    backgroundColor: "#616161",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },

  instructions: {
    color: "white",
    marginBottom: 30,
    fontWeight: "bold",
    fontSize: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    padding: 10,
    color: "white",
    borderRadius: 10,
  },

  button: {
    borderRadius: 10,
    backgroundColor: "#0551fb",
    padding: 12,
    marginTop: 30,
    alignItems: "center",
    marginBottom: 20,
  },

  button_text: {
    color: "white",
  },
});
