import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeArea({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: "rgba(255,255,255,0.2)",
      }}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({});
