import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={[styles.white_text, { fontWeight: "bold", fontSize: 24 }]}>
        Send Money
      </Text>
      {/*search section*/}
      <View style={styles.search}>
        <Ionicons name="search" size={24} color="white" />
        <Text style={styles.search_text}>Search</Text>
      </View>

      {/* balance */}
      <View style={[styles.grey_bg]}>
        <View style={[styles.balance_currency]}>
          <Text style={[styles.white_text, { fontSize: 18 }]}>Balance</Text>
          <View style={styles.currency}>
            <Text style={[styles.white_text]}>USD ▼</Text>
          </View>
        </View>

        <Text style={[styles.white_text, styles.balance_text]}>$ 360.00</Text>
      </View>

      {/* profiles */}
      <View style={[styles.profile_section]}>
        <Text
          style={[
            styles.white_text,
            { alignSelf: "flex-end", marginBottom: 5 },
          ]}
        >
          see all ➤
        </Text>

        <View style={[styles.grey_bg, styles.profile_details]}>
          {["Jane Doe", "Mr Morningstar", "Davis Meru", "Lara Croft"].map(
            (profile, i) => {
              return (
                <View style={styles.profile_card} key={i}>
                  <Image
                    source={require("../../assets/images/profile_pic.jpg")}
                    style={[styles.profile_pic]}
                  />

                  <Text style={[styles.white_text, styles.profile_name]}>
                    {profile?.slice(0, 7)}...
                  </Text>
                </View>
              );
            }
          )}
        </View>
      </View>

      {/* transactions */}
      <View style={[styles.transactions_section]}>
        <View style={styles.transactions_header}>
          <Text style={[styles.white_text]}>Transactions</Text>
          <Text style={[styles.white_text]}>see all ➤</Text>
        </View>

        <View style={styles.transactions_details}>
          {["Jane Doe", "Mr Morningstar", "Davis Meru", "Lara Croft"].map(
            (profile, i) => {
              return (
                <View style={[styles.grey_bg, styles.transaction_card]} key={i}>
                  <Image
                    source={require("../../assets/images/profile_pic.jpg")}
                    style={[styles.profile_pic]}
                  />

                  {/* transaction details */}
                  <View style={styles.transaction_info}>
                    {/* name amount */}
                    <View style={styles.name_amount}>
                      <Text style={[styles.white_text, { fontWeight: "bold" }]}>
                        {profile}
                      </Text>
                      <Text style={{ color: "lime" }}>+$100</Text>
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
            }
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    height: "100%",
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

  search: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    paddingVertical: 5,
    borderRadius: 100,
    gap: 10,
  },

  search_text: {
    color: "white",
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

  profile_section: {},

  profile_details: {
    flexDirection: "row",
    justifyContent: "space-around",
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

  profile_name: {
    fontSize: 10,
  },

  transactions_details: {
    gap: 10,
  },

  transactions_header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },

  transaction_card: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  transaction_info: {
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
