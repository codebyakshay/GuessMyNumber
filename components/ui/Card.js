import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: deviceWidth < 380 ? 12 : 18,
    padding: deviceWidth < 380 ? 16 : 24,
    backgroundColor: Colors.Primary400,
    marginHorizontal: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    elevation: 10,

    // IOS SHADOW
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.45,
  },
});
