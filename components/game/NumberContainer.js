import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.Primary400,
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.Primary400,
    fontSize: deviceWidth < 380 ? 18 : 34,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
