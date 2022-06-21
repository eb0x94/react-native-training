import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  let [goalList, setGoalList] = useState([]);
  let [isAddGoal, setIsAddGoal ] = useState(false);

  // // Without objects... just plain string variables => Works with ScrollView. => Keys will be added later.
  // let addGoalButtonHanlder = () => {
  //   setGoalList((currentGoals) => [...goalList, enteredGoal]);
  // };

  // With object variables because of FlatList component. Keys will be added when storing the data.
  let addGoalButtonHanlder = (goal) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal },
    ]);
    setIsAddGoal(false); 
  };

  let removeGoalHandler = (goalToDelete) => {
    setGoalList((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalToDelete);
    });
  };

  let cancelAddGoal = () => {
    setIsAddGoal(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add Goal"  onPress={()=> setIsAddGoal(true)} />
      <GoalInput visible={isAddGoal} onAddGoal={addGoalButtonHanlder} onCancel={cancelAddGoal}/>
      {/* The following is example with FlatList component how to list data. 
      Usually for huge chunks with infinite scrolling 
      The date fed to the "FlatList" component should be an object in "key/value" pairs, otherwise
      it throws warnings.
      */}
      <FlatList
        data={goalList}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removeGoalHandler}
            itemTitle={itemData.item.value}
          />
        )}
      />
      {/* The following is example to list data, which is scrollable - ScrollView is the component */}
      {/* <ScrollView>
        {goalList.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
});
