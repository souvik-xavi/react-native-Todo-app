import React, { useState } from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";
import { Modal } from "react-native-web";

const GoalInput = (props) => {
  const [goal, setGoal] = useState("");
  const {onAddGoal,visible, cancle}= props;
  const handleInput = (enteredGoal) => {
    setGoal(enteredGoal);
  };
  return(
    <Modal visible={visible}  animationType="fade">
    <View style={styles.InputContainer}>
      <TextInput
        placeholder="Course Goals"
        style={styles.TextContainer}
        onChangeText={handleInput}
        value={goal}
      />
      <View style={styles.ButtonContainer}>
      <Button title="ADD" onPress={()=>onAddGoal(goal,setGoal)} />
      <Button title="Cancel" color="red" onPress={()=>cancle()} />
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  TextContainer: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "70%",
    marginBottom:5
  },
  ButtonContainer: {
    flexDirection:'row',
    justifyContent : 'space-between',
    width:'10%',
  }
});
export default GoalInput;
