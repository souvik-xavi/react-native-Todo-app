import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-web";
const GoalItem = (props) => {
  const { title,onDelete } = props;

  return (
    <TouchableOpacity onPress={()=> onDelete()}>
      <Text style={styles.ListItem}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 5,
  },
});
export default GoalItem;
