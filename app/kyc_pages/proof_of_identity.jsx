import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContextProvider } from "../context/KycContext";

export default function IdentityProof() {
  const router = useRouter();
  const { formData, setFormData } = useContextProvider();

  const handleSubmit = () => {
    console.log(formData);
    router.push("/kyc_pages/id_scanning");
  };

  const [activeBtn, setActiveBtn] = useState("");

  const handleSelectProof = (id_type) => {
    setActiveBtn(id_type);
    setFormData({ ...formData, IdentityProof: id_type });
  };

  return (
    <View style={styles.container}>
      {/* back button */}
      <View style={styles.back_icon}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => router.push("/kyc_pages/personal_details")}
        />
      </View>

      {/* indicators */}
      <View style={styles.indicators}>
        <View style={styles.indicator}></View>
        <View style={styles.active_indicator}></View>
        <View style={styles.indicator}></View>
        <View style={styles.indicator}></View>
      </View>

      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.header_text, styles.header_text_bold]}>
            Proof of Identity
          </Text>
          <Text style={styles.header_text}>Let us know about you</Text>
        </View>
        <LinearGradient style={styles.icon_section} colors={["blue", "cyan"]}>
          <View style={styles.inner_section}>
            <FontAwesome
              name="drivers-license-o"
              size={24}
              color="white"
              onPress={() => router.push("/get_started")}
            />
          </View>
        </LinearGradient>
      </View>

      <Text style={styles.instructions}>
        Choose a verification method.You will be asked for photo proof of
        residence in the next step
      </Text>

      <View style={styles.form}>
        <TouchableOpacity
          onPress={() => handleSelectProof("national_id")}
          style={[
            styles.input,
            activeBtn == "national_id" && styles.active_btn,
          ]}
        >
          <Text style={styles.button_text}>National Identity Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSelectProof("passport")}
          style={[styles.input, activeBtn == "passport" && styles.active_btn]}
        >
          <Text style={styles.button_text}>Passport</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSelectProof("driver_license")}
          style={[
            styles.input,
            activeBtn == "driver_license" && styles.active_btn,
          ]}
        >
          <Text style={styles.button_text}>Driver License</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.button_text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#1e1e1e",
    height: "100%",
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

  active_btn: {
    borderWidth: 1,
    borderColor: "orange",
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
