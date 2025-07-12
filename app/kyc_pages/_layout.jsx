import { Stack } from "expo-router";
import ContextProvider from "../context/KycContext";

export default function KycPagesLayout() {
  return (
    <ContextProvider>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      />
    </ContextProvider>
  );
}
