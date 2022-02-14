import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Button } from "react-native-web";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isADDMore, setIsAddMore] = useState(false);

  const GoalHandle = (goal, setGoal) => {
    if (goal != "") {
      setCourseGoal((currentCourse) => [
        ...currentCourse,
        { key: Math.random().toString(), value: goal },
      ]);
      setGoal("");
      setIsAddMore(false);
    }
  };
   const handleCancel=()=>{
     setIsAddMore(false)
   }
  const DeleteHandle = (goalID) => {
    setCourseGoal((currentCourse) => {
      return currentCourse.filter((goals) => goals.key != goalID);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Todo" onPress={() => setIsAddMore(true)}></Button>
      <GoalInput visible={isADDMore} cancle={handleCancel} onAddGoal={GoalHandle} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoal}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            onDelete={DeleteHandle.bind(this, itemData.item.key)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
