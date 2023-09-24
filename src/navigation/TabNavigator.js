import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ToDoScreen from '../screens/ToDoScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BotScreen from '../screens/BotScreen';
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ToDoScreen"
        component={ToDoScreen}
        options={{
          tabBarLabel: 'ToDo',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="BotScreen"
        component={BotScreen}
        options={{
          tabBarLabel: 'ChatBot',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
