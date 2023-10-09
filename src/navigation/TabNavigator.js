import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen/HomeScreen';
import PriceScreen from '../screens/BottomTabScreens/PriceScreen/PriceScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: '#CCC', position: 'absolute'},
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          title: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="PriceTab"
        component={PriceScreen}
        options={{
          tabBarLabel: 'Price',
          title: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="tags" size={size} color={color} />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
