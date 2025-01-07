import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'goals';

export const saveGoal = async (goal) => {
  try {
    const existingGoals = await loadGoals();
    const updatedGoals = [...existingGoals, goal];
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGoals));
  } catch (error) {
    console.error('Error saving goal:', error);
  }
};

export const loadGoals = async () => {
  try {
    const goals = await AsyncStorage.getItem(STORAGE_KEY);
    return goals ? JSON.parse(goals) : [];
  } catch (error) {
    console.error('Error loading goals:', error);
    return [];
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const existingGoals = await loadGoals();
    const updatedGoals = existingGoals.filter(goal => goal.id !== goalId);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedGoals));
  } catch (error) {
    console.error('Error deleting goal:', error);
  }
};
