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

export default function BankAccount() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    nationality: "",
    bankName: "",
    swiftBicCode: "",
    branchName: "",
    accountNumber: "",
    currency: "",
  });

  const [saveRecipient, setSaveRecipient] = useState(false);

  const handleSaveRecipient = () => {
    saveRecipient ? setSaveRecipient(false) : setSaveRecipient(true);
    console.log("clicked");
  };

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
                Bank Account Details
              </Text>
            </View>
            <LinearGradient
              style={styles.icon_section}
              colors={["#42275a", "#734b6d"]}
            >
              <View style={styles.inner_section}>
                <Entypo name="credit-card" size={20} color="white" />
              </View>
            </LinearGradient>
          </View>

          <Text style={styles.instructions}>
            Write the recipients bank details below
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
              placeholder="Email*"
              placeholderTextColor="gray"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              style={styles.input}
            />

            <TextInput
              placeholder="Phone Number*"
              placeholderTextColor="gray"
              value={formData.phoneNumber}
              onChangeText={(text) =>
                setFormData({ ...formData, phoneNumber: text })
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
              placeholder="Bank name*"
              placeholderTextColor="gray"
              value={formData.bankName}
              onChangeText={(text) =>
                setFormData({ ...formData, bankName: text })
              }
              style={styles.input}
            />

            <TextInput
              placeholder="Swift/BIC Code*"
              placeholderTextColor="gray"
              value={formData.swiftBicCode}
              onChangeText={(text) =>
                setFormData({ ...formData, swiftBicCode: text })
              }
              style={styles.input}
            />

            <TextInput
              placeholder="Branch Name*"
              placeholderTextColor="gray"
              value={formData.branchName}
              onChangeText={(text) =>
                setFormData({ ...formData, branchName: text })
              }
              style={styles.input}
            />
          </View>

          <TextInput
            placeholder="Account Number*"
            placeholderTextColor="gray"
            value={formData.accountNumber}
            onChangeText={(text) =>
              setFormData({ ...formData, accountNumber: text })
            }
            style={styles.input}
          />

          <TextInput
            placeholder="Currency*"
            placeholderTextColor="gray"
            value={formData.currency}
            onChangeText={(text) =>
              setFormData({ ...formData, currency: text })
            }
            style={styles.input}
          />

          {/* save recipients details */}
          <TouchableOpacity
            style={styles.save_details}
            onPress={handleSaveRecipient}
          >
            {/* save custom btn */}
            <View style={styles.outer_btn}>
              <Text style={saveRecipient && styles.inner_btn}>✔</Text>
            </View>

            <Text style={{ color: "grey" }}>Save recipient's details</Text>
          </TouchableOpacity>

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

  save_details: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 5,
  },

  outer_btn: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  inner_btn: {
    color: "white",
    fontSize: 8,
  },
});
