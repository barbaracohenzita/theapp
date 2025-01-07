import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoalListScreen from './src/screens/GoalListScreen';
import AddGoalScreen from './src/screens/AddGoalScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GoalList">
        <Stack.Screen name="GoalList" component={GoalListScreen} />
        <Stack.Screen name="AddGoal" component={AddGoalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
