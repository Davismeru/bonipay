import { Roboto_800ExtraBold } from "@expo-google-fonts/roboto";
import { useFonts } from "@expo-google-fonts/roboto/useFonts";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  // load fonts
  let [fontsLoaded] = useFonts({
    Roboto_800ExtraBold,
  });
  if (!fontsLoaded) {
    return null;
  }

  setTimeout(() => {
    router.push("/welcome");
  }, 10);

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
