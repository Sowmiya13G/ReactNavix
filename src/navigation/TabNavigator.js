import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './TabBar';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen/HomeScreen';
import PriceScreen from '../screens/BottomTabScreens/PriceScreen/PriceScreen';
// import ProfileScreen from '../screens/BottomTabScreens/ProfileScreen/ProfileScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const tabs = [
    {
      name: 'HomeTab',
      label: 'Home',
      component: HomeScreen,
    },
    {
      name: 'PriceTab',
      label: 'Cart',
      component: PriceScreen,
    },
    // {
    //   name: 'ProfileTab',
    //   label: 'Profile',
    //   component: ProfileScreen,
    // },
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
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigator;
