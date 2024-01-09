/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import PriceScreen from '../screens/BottomTabScreens/PriceScreen';
import ItemScreen from '../screens/BottomTabScreens/ItemsScreen';
import CartScreen from '../screens/BottomTabScreens/CartScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabs = [
    {
      name: 'HomeTab',
      component: HomeScreen,
    },
    {
      name: 'CartTab',
      component: CartScreen,
    },
    {
      name: 'ItemTab',
      component: ItemScreen,
    },
  ];

  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      initialRouteName={'HomeTab'}
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#ccc',
        activeTintColor: 'white',
        headerShown: false,
      }}>
      {tabs.map((tab, index) => (
        <Tab.Screen key={index} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
