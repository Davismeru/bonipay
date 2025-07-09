import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  const router = useRouter();
  const [activeData, setActiveData] = useState(0);

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }

  const welcome_data = [
    {
      heading: "Send Money Across Borders With ease at lower rates",
      content:
        "say goodbye to costly and complicated processes. Let's get started with your international transactions.",
    },

    {
      heading: "Manage and Track Your Money in One Place",
      content:
        "Need To Send Money Urgently? No problem with Bonipay. You can transfer funds quickly and conviniently even on the go.",
    },

    {
      heading: "Safe And Secure Transactions",
      content:
        "Your financial data is encrypted and stored securely ensuring that your money is in safe hands.",
    },
  ];
  const handleSwitchData = () => {
    activeData < 2 && setActiveData((prev) => prev + 1);
    console.log(activeData);
  };
  return (
    <View style={styles.container}>
      {/* bottom content area */}
      <View style={styles.contentArea}>
        {/* text section */}
        <View>
          <Text style={styles.header}>{welcome_data[activeData].heading}</Text>
          <Text style={styles.content}>{welcome_data[activeData].content}</Text>
        </View>

        {/* indicators sections */}
        <View style={styles.indicator_section}>
          {welcome_data.map((item, i) => (
            <View
              style={[styles.indicator, activeData == i && styles.active]}
              key={i}
            >
              {/*each indicator container */}
            </View>
          ))}
        </View>

        {/* buttons sections */}
        <View style={styles.btns}>
          {activeData < 2 && (
            <TouchableOpacity
              style={styles.btn_prev}
              onPress={() => router.push("/get_started")}
            >
              <Text>Skip</Text>
            </TouchableOpacity>
          )}
          {activeData < 2 && (
            <TouchableOpacity
              style={styles.btn_next}
              onPress={handleSwitchData}
            >
              <Text style={{ color: "white" }}>Next</Text>
            </TouchableOpacity>
          )}

          {activeData == 2 && (
            <TouchableOpacity
              style={styles.btn_get_started}
              onPress={() => router.push("/get_started")}
            >
              <Text style={{ color: "white" }}>Get started</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1e1e1e",
    position: "relative",
  },
  contentArea: {
    height: "50%",
    backgroundColor: "white",
    marginTop: "120%",
    borderRadius: 70,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  header: {
    fontFamily: "Roboto_700Bold",
    fontSize: 25,
    textAlign: "center",
  },
  content: {
    fontFamily: "Roboto_400Regular",
    textAlign: "center",
    fontSize: 15,
    marginTop: 30,
  },

  btns: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 30,
  },

  btn_next: {
    backgroundColor: "#1e1e1e",
    width: 150,
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
  },

  btn_prev: {
    width: 150,
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#1e1e1e",
  },

  btn_get_started: {
    backgroundColor: "#1e1e1e",
    width: "100%",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 5,
  },

  indicator_section: {
    flexDirection: "row",
    marginTop: 30,
  },
  indicator: {
    borderWidth: 1,
    width: 8,
    height: 8,
    marginRight: 5,
    borderRadius: "100%",
  },

  active: {
    backgroundColor: "#1e1e1e",
  },
});
