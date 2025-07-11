import { useRouter } from "expo-router";
import { Button, Text, TextInput, View } from "react-native";
import { useContextProvider } from "../context/KycContext";

export default function Confirmation() {
  const router = useRouter();
  const { formData, setFormData } = useContextProvider();

  return (
    <View style={{ padding: 20 }}>
      <Text>Full Name</Text>
      <TextInput
        placeholder="Enter your name"
        value={formData.fullName}
        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          marginVertical: 10,
          padding: 10,
        }}
      />
      <Button
        title="Next"
        // onPress={() => router.push("/personal-details/step2")}
      />
    </View>
  );
}
