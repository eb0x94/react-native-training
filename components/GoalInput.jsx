import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

let GoalInput = (props) => {
  let [enteredGoal, setEnteredGoal] = useState("");

  let goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  let addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type in your goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button color="red" title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    width: "80%",
    marginBottom: 10,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width:'60%'
  },
  button: {
    width:'40%'
  },
});

export default GoalInput;
