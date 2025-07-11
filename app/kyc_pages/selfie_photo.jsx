import { Ionicons } from "@expo/vector-icons";
import { CameraView, useCameraPermissions } from "expo-camera";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContextProvider } from "../context/KycContext";

export default function Selfie() {
  const router = useRouter();
  const { formData, setFormData } = useContextProvider();

  const [permission, requestPermission] = useCameraPermissions();

  const [showCamera, setShowCamera] = useState(false);
  const [camFace, setCamFace] = useState("back");

  // After permission is granted
  useEffect(() => {
    setCamFace("front");
  }, [camFace]);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const handleSubmit = () => {
    console.log(formData);
    router.push("/kyc_pages/selfie_photo");
  };

  return (
    <View style={styles.container}>
      {/* back button */}
      <View style={styles.back_icon}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          onPress={() => router.push("/kyc_pages/proof_of_identity")}
        />
      </View>

      {/* indicators */}
      <View style={styles.indicators}>
        <View style={styles.indicator}></View>
        <View style={styles.indicator}></View>
        <View style={styles.indicator}></View>
        <View style={styles.active_indicator}></View>
      </View>

      {/* header */}
      <View style={styles.header}>
        <View>
          <Text style={[styles.header_text, styles.header_text_bold]}>
            Selfie Photo
          </Text>
          <Text style={styles.header_text}>
            All legal details as on your ID
          </Text>
        </View>
        <LinearGradient style={styles.icon_section} colors={["orange", "red"]}>
          <View style={styles.inner_section}>
            <Ionicons name="person-outline" size={24} color="white" />
          </View>
        </LinearGradient>
      </View>

      {/* camera view section */}

      <CameraView style={styles.camera} facing={camFace} />

      {/* capture button */}
      <TouchableOpacity style={styles.capture_outer}>
        <View style={styles.capture_inner}></View>
      </TouchableOpacity>

      {/* continue button */}
      <TouchableOpacity style={styles.btn_continue} onPress={handleSubmit}>
        <Text style={{ color: "white" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#1e1e1e",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },

  camera: {
    flexGrow: 0.5,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#4e4e4e",
    borderRadius: 10,
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

  capture_outer: {
    backgroundColor: "white",
    width: 80,
    height: 80,
    alignSelf: "center",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  capture_inner: {
    backgroundColor: "red",
    width: 70,
    height: 70,
    borderRadius: 100,
  },

  btn_continue: {
    backgroundColor: "#0551fb",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
  },
});
