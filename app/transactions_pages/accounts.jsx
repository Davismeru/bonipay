import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function accounts() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", flexDirection: "row", gap: "10" }}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={[styles.white_text, { fontWeight: "bold", fontSize: 24 }]}>
          Send Money
        </Text>
      </View>

      {/*search section*/}
      <View style={styles.search}>
        <Ionicons name="search" size={24} color="white" />
        <Text style={styles.search_text}>Search</Text>
      </View>

      {/* accounts list */}
      <View style={styles.accounts_container}>
        <Text
          style={[
            styles.white_text,
            { marginBottom: 10, fontWeight: "bold", alignSelf: "flex-end" },
          ]}
        >
          Accounts
        </Text>

        <ScrollView
          style={{ height: "70%" }}
          contentContainerStyle={styles.account_details}
        >
          {[
            "Jane Doe",
            "Mr Morningstar",
            "Davis Meru",
            "Lara Croft",
            "Tom Jerry",
            "Ben Tennyson",
            "Henry Hart",
            "Alex John",
            "Kim Kardashian",
            "Kim Possible",
            "Tommy Vercetti",
            "Carl Johnson",
            "Oliver Ngoma",
            "Tom Jerry",
            "Ben Tennyson",
            "Henry Hart",
            "Alex John",
            "Kim Kardashian",
            "Kim Possible",
            "Tommy Vercetti",
            "Carl Johnson",
            "Oliver Ngoma",
            "mr yoh",
          ].map((profile, i) => {
            return (
              <View style={[styles.grey_bg, styles.account_card]} key={i}>
                <Image
                  source={require("../../assets/images/profile_pic.jpg")}
                  style={[styles.profile_pic]}
                />

                <Text style={styles.white_text}>{profile}</Text>
              </View>
            );
          })}
        </ScrollView>

        {/* add account button */}
        <TouchableOpacity
          style={[styles.add_btn, styles.grey_bg]}
          onPress={() => router.push("/transactions_pages/choose_account")}
        >
          <View style={styles.inner_btn}>
            <Text style={[styles.white_text]}>+</Text>
          </View>
        </TouchableOpacity>
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

  account_card: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },

  profile_pic: {
    width: 30,
    height: 30,
    borderRadius: 100,
    objectFit: "cover",
  },
  accounts_container: {},
  account_details: {
    gap: 10,
  },

  add_btn: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    alignSelf: "flex-end",
  },
});
