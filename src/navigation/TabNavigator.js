import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Custom tab bar
import TabBar from './TabBar';

// Screens
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import ItemScreen from '../screens/BottomTabScreens/ItemsScreen';
import CartScreen from '../screens/BottomTabScreens/CartScreen';
import PriceScreen from '../screens/BottomTabScreens/PriceScreen';
import MileStone from '../screens/BottomTabScreens/Milestone';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabs = [
    {
      name: 'HomeTab',
      component: HomeScreen,
    },
    {
      name: 'CartTab',
      component: MileStone,
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
