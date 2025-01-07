import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ title, description }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalTitle}>{title}</Text>
      <Text style={styles.goalDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default GoalItem;
