import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Welcome() {
  const [activeData, setActiveData] = useState(0);
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
    setActiveData(activeData++);
    console.log(activeData);
  };
  return (
    <View style={styles.container}>
      {/* bottom content area */}
      <View style={styles.contentArea}>
        {/* text section */}
        <View>
          <Text style={styles.header}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            unde.
          </Text>
          <Text style={styles.content}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore,
            unde.
          </Text>
        </View>

        {/* indicators sections */}
        <View style={styles.indicator_section}>
          {welcome_data.map((item) => (
            <View style={styles.indicator}>
              {/*each indicator container */}
            </View>
          ))}
        </View>

        {/* buttons sections */}
        <View style={styles.btns}>
          <TouchableOpacity style={styles.btn_prev}>
            <Text>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_next}>
            <Text style={{ color: "white" }}>Next</Text>
          </TouchableOpacity>
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
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 30,
  },
  content: {
    textAlign: "center",
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
});
