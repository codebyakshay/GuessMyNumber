import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

export default function StartGameScreen({ startGameScreen }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Please choose number between 1 and 99 only!",
        [{ text: "OKAY!", style: "destructive", onPress: resetInputHandler }]
      );
      return null;
    }

    startGameScreen(chosenNumber);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  const marginTopDynamic = height < 480 ? 30 : 50;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDynamic }]}>
          <Title>Guess My Number</Title>

          <Card>
            <InstructionText>Enter A Number</InstructionText>
            <TextInput
              value={enteredNumber}
              onChangeText={(text) => setEnteredNumber(text)}
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="##"
              placeholderTextColor={"#9f9f9f6f"}
            />

            <View style={styles.buttonsContainer}>
              <View style={{ flex: 1 }}>
                <PrimaryButton onPress={resetInputHandler}>reset</PrimaryButton>
              </View>
              <View style={{ flex: 1 }}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

// const deviceHeight = Dimensions.get("window").height;
// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },

  instructionText: {
    color: Colors.Accent500,
    fontSize: 24,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.Accent500,
    borderBottomWidth: 2,
    color: Colors.Accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonsContainer: {
    flexDirection: "row",
  },
});
