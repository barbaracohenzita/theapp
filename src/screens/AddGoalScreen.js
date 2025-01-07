import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddGoalScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddGoal = () => {
    // Add goal to storage (to be implemented)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Goal Title"
        style={styles.input}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Goal Description"
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddGoalScreen;
