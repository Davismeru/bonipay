import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function send_to_profile() {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ alignItems: "center", flexDirection: "row", gap: "10" }}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={[styles.white_text, { fontWeight: "bold", fontSize: 24 }]}>
          Send Money
        </Text>
      </View>

      <View
        style={styles.profile_card}
        onPress={() => router.push("/intrests_pages/send_to_profile")}
      >
        <Image
          source={require("../../assets/images/profile_pic.jpg")}
          style={[styles.profile_pic]}
        />

        <Text style={[styles.white_text, styles.profile_name]}>Jane Doe</Text>
      </View>

      {/* balance */}
      <View style={[styles.grey_bg]}>
        <View style={[styles.balance_currency]}>
          <Text style={[styles.white_text, { fontSize: 18 }]}>Balance</Text>
          <View style={styles.currency}>
            <Text style={[styles.white_text]}>Calculator</Text>
          </View>
        </View>

        <Text style={[styles.white_text, styles.balance_text]}>$ 360.00</Text>
      </View>

      {/* transaction amount details */}
      <View style={styles.amount_details}>
        {/* amount to send */}
        <View style={styles.detail_card}>
          <Text style={styles.white_text}>Amount to send</Text>
          <Text style={[styles.white_text, styles.grey_bg, styles.amount_text]}>
            $ 345
          </Text>
        </View>

        {/* conversion rate */}
        <View style={styles.detail_card}>
          <Text style={styles.white_text}>Conversion rate</Text>
          <Text style={[styles.white_text, styles.grey_bg, styles.amount_text]}>
            KES/USD = 129.7 ▼
          </Text>
        </View>

        {/* AMount to recieve */}
        <View style={styles.detail_card}>
          <Text style={styles.white_text}>Amount to recieve</Text>
          <Text style={[styles.white_text, styles.grey_bg, styles.amount_text]}>
            Ksh 34,678
          </Text>
        </View>

        {/* transfer fee */}
        <View style={styles.detail_card}>
          <Text style={styles.white_text}>Transfer fee</Text>
          <Text style={[styles.white_text, styles.grey_bg, styles.amount_text]}>
            0.3%
          </Text>
        </View>

        {/* Amount to pay */}
        <View style={styles.detail_card}>
          <Text style={styles.white_text}>Amount to pay</Text>
          <Text style={[styles.white_text, styles.grey_bg, styles.amount_text]}>
            $ 345
          </Text>
        </View>

        {/* input amount */}
        <TextInput
          placeholder="Input amount to send"
          placeholderTextColor="grey"
          style={styles.amount_input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/transactions_pages/enter_pin")}
        >
          <Text style={styles.button_text}>Continue</Text>
        </TouchableOpacity>
      </View>

      {/* major intrest rates */}
      <View style={[styles.intrests_section]}>
        <View style={styles.intrests_header}>
          <Text style={[styles.white_text]}>Major intrests rates</Text>
          <Text style={[styles.white_text]}>see all ➤</Text>
        </View>

        <View style={styles.intrests_details}>
          {["GPB/USD", "USD/KES", "USD/JPY", "USD/GBP"].map((profile, i) => {
            return (
              <View style={[styles.grey_bg, styles.intrest_card]} key={i}>
                <View style={{ flexDirection: "row", gap: 2 }}>
                  <Image
                    source={require("../../assets/images/usa_flag.png")}
                    style={[styles.flag_pic]}
                  />
                  <Image
                    source={require("../../assets/images/drc_flag.png")}
                    style={[styles.flag_pic]}
                  />
                </View>

                {/* transaction details */}
                <View style={styles.intrest_info}>
                  {/* name amount */}
                  <View style={styles.name_amount}>
                    <Text style={[styles.white_text, { fontWeight: "bold" }]}>
                      {profile}
                    </Text>
                    <Text style={{ color: "lime" }}>0.0078</Text>
                  </View>

                  {/* time and date */}
                  <View style={styles.time_date}>
                    <Text style={{ color: "grey", fontSize: 12 }}>
                      10:30 AM
                    </Text>
                    <Text style={{ color: "grey", fontSize: 12 }}>
                      07 June, 2025
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    padding: 30,
    gap: 20,
  },

  white_text: {
    color: "white",
  },

  grey_bg: {
    backgroundColor: "#343d46",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  profile_card: {
    alignItems: "center",
    gap: 5,
  },

  profile_pic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    objectFit: "cover",
  },

  flag_pic: {
    width: 30,
    height: 30,
    borderRadius: 100,
    objectFit: "cover",
    borderWidth: 1,
    borderColor: "white",
  },

  profile_name: {
    fontSize: 10,
  },

  balance_currency: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  currency: {
    borderWidth: 0.5,
    borderColor: "white",
    borderRadius: 100,
    paddingHorizontal: 5,
  },

  balance_text: {
    fontSize: 50,
    alignSelf: "center",
    letterSpacing: 5,
    fontWeight: "bold",
  },

  amount_details: {
    gap: 10,
  },

  amount_text: {
    textAlign: "center",
    marginTop: 5,
  },

  amount_input: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
  },

  button: {
    borderRadius: 10,
    backgroundColor: "#0551fb",
    padding: 12,
    marginTop: 15,
    alignItems: "center",
    marginBottom: 20,
  },

  button_text: {
    color: "white",
  },

  intrests_details: {
    gap: 10,
  },

  intrests_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  intrest_card: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  intrest_info: {
    flex: 1,
    gap: 5,
  },

  name_amount: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  time_date: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
