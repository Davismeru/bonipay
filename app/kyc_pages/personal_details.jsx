import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
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
import { useContextProvider } from "../context/KycContext";

export default function PersonalDetails() {
  const router = useRouter();
  const { formData, setFormData } = useContextProvider();

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
              onPress={() => router.push("/get_started")}
            />
          </View>

          {/* indicators */}
          <View style={styles.indicators}>
            <View style={styles.active_indicator}></View>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>
            <View style={styles.indicator}></View>
          </View>

          {/* header */}
          <View style={styles.header}>
            <View>
              <Text style={[styles.header_text, styles.header_text_bold]}>
                Personal Details
              </Text>
              <Text style={styles.header_text}>
                All legal details as on your ID
              </Text>
            </View>
            <LinearGradient
              style={styles.icon_section}
              colors={["orange", "red"]}
            >
              <View style={styles.inner_section}>
                <Ionicons
                  name="person-outline"
                  size={24}
                  color="white"
                  onPress={() => router.push("/get_started")}
                />
              </View>
            </LinearGradient>
          </View>

          <Text style={styles.instructions}>
            Write your full name, date of birth, Country of origin
            (Nationality). We will verify your identity in the next step.
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
              placeholder="Date of Birth*"
              placeholderTextColor="gray"
              value={formData.DOB}
              onChangeText={(text) => setFormData({ ...formData, DOB: text })}
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
              placeholder="Gender*"
              placeholderTextColor="gray"
              value={formData.gender}
              onChangeText={(text) =>
                setFormData({ ...formData, gender: text })
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

  indicators: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    marginBottom: 30,
  },
  active_indicator: {
    backgroundColor: "white",
    height: 8,
    width: 18,
    borderRadius: 10,
  },

  indicator: {
    height: 8,
    width: 8,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 100,
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
