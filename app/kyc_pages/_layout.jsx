import { Stack } from "expo-router";
import ContextProvider from "../context/KycContext";

export default function PersonalDetailsLayout() {
  return (
    <ContextProvider>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      />
    </ContextProvider>
  );
}
