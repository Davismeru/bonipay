import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ReceiptScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={{
          alignSelf: "flex-start",
          flexDirection: "row",
          justifyContent: "center",
          gap: 10,
          marginBottom: 10,
        }}
      >
        {/* back button */}
        <View style={styles.back_icon}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="white"
            onPress={() => router.push("/transactions_pages/send_to_profile")}
          />
        </View>
        <Text style={{ color: "white" }}>Receipt</Text>
      </View>
      <ScrollView contentContainerStyle={styles.receipt}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.header}>BONIPAY</Text>
          <Text style={styles.subHeader}>Transaction Receipt</Text>
        </View>

        <View style={styles.section}>
          <LabelValue label="Transaction ID" value="TXN983243KEL" />
          <LabelValue label="Time" value="Mon 12 Jun, 2021 12:23" />
          <LabelValue
            label="Statust"
            value="Completed"
            valueStyle={styles.greenText}
          />
          <LabelValue label="Delivery Estimate" value="Within 30 minutes" />
        </View>

        <Text style={styles.sectionTitle}>👤 Recipient Details</Text>
        <View style={styles.section}>
          <LabelValue label="Recipient Name" value="Jane Doe" />
          <LabelValue label="Bank Name" value="Equity Bank Kenya" />
          <LabelValue label="Account Number" value="****67890" />
          <LabelValue label="SWIFT/BIC" value="EQBLKENA" />
          <LabelValue label="Bank Country" value="Kenya" />
        </View>

        <Text style={styles.sectionTitle}>💸 Transfer Details</Text>
        <View style={styles.section}>
          <LabelValue label="You Sent" value="$230.00" />
          <LabelValue label="FX Rate" value="1USD=137.56" />
          <LabelValue label="Recipient Receives" value="31,638.80 Ksh" />
          <LabelValue label="Transfer Fee" value="$2" />
          <LabelValue label="Total Paid" value="$232" />
          <LabelValue label="Payment Method" value="App Wallet" />
        </View>

        <View style={styles.support}>
          <Text style={styles.supportText}>Support</Text>
          <Text style={styles.supportText}>
            customer service@bonipay-inc.com
          </Text>
        </View>

        <Text style={styles.footerText}>
          Enjoy a better life with BONIPAY. Get free transfers, withdrawals,
          bill payments. Bonipay is licensed by the Central Bank of Kenya issued
          by CBK.
        </Text>
      </ScrollView>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => router.push("/transactions_pages/dashboard")}
        >
          <Text style={styles.sendText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.downloadBtn}
          onPress={() => router.push("/transactions_pages/send_to_profile")}
        >
          <Text style={styles.cancelText}>Download</Text>

          <Ionicons
            name="download"
            size={24}
            color="white"
            onPress={() => router.push("/transactions_pages/send_to_profile")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const LabelValue = ({ label, value, valueStyle }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={[styles.value, valueStyle]}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    flex: 1,
  },
  receipt: {
    backgroundColor: "#F5F5F5",
    marginTop: 30,
    padding: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 15,
  },
  section: {
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
  },
  label: {
    fontSize: 12,
    color: "#555",
  },
  value: {
    fontSize: 12,
    color: "#222",
  },
  greenText: {
    color: "green",
    fontWeight: "bold",
  },
  support: {
    marginVertical: 20,
    alignItems: "center",
  },
  supportText: {
    fontSize: 13,
    color: "#333",
  },
  footerText: {
    fontSize: 12,
    textAlign: "center",
    color: "#444",
    marginTop: 10,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  downloadBtn: {
    width: "49%",
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
  },
  homeBtn: {
    width: "49%",
    backgroundColor: "#0551fb",
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
  },

  cancelText: {
    color: "#fff",
    fontSize: 16,
  },
  sendText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
