import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GoalItem from '../components/GoalItem';

const GoalListScreen = () => {
  const [goals, setGoals] = useState([
    { id: '1', title: 'Learn React Native', description: 'Complete the React Native tutorial' },
    { id: '2', title: 'Build a Goal App', description: 'Create a goal setting app using React Native' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GoalItem title={item.title} description={item.description} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default GoalListScreen;
