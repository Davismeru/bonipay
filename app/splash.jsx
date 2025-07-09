import { Roboto_800ExtraBold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import React from "react";
import { Text, View } from "react-native";

export default function Splash() {
  let [fontsLoaded] = useFonts({
    Roboto_800ExtraBold,
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }
  return (
    <View
      style={{
        backgroundColor: "#1e1e1e",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          transform: [{ rotate: "-90deg" }],
          color: "#4e4e4e",
          fontFamily: "Roboto_800ExtraBold",
          fontSize: 100,
        }}
      >
        BONIPAY
      </Text>
    </View>
  );
}
