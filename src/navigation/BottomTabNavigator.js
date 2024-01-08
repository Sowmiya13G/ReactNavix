/* eslint-disable prettier/prettier */
// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from './CustomTab';
import { Text, StyleSheet } from 'react-native';
import FloatingButton from './FloatingButton';
import { UserProfileScreen } from '../screens/BottomTabScreens/UserProfileScreen';
import { DashboardScreen } from '../screens/OnBoardingscreens/DashboardScreen';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import ItemScreen from '../screens/BottomTabScreens/ItemsScreen';
import BlogScreen from '../screens/BottomTabScreens/BlogScreen';
import { useNavigation } from '@react-navigation/native';
import theme from '../constants/theme';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const tabs = [
    {
      name: 'HomeTab',
      component: HomeScreen,
    },
    {
      name: 'ItemTab',
      component: ItemScreen,
    },
    {
      name: 'UserTab',
      component: UserProfileScreen,
    },
    {
      name: 'DashboardTab',
      component: DashboardScreen,
    },
  ];

  return (
    <>
      <Tab.Navigator
        CustomTab={props => <CustomTab {...props} />}
        initialRouteName={'DashboardTab'}
        screenOptions={{
          CustomTabActiveTintColor: 'blue',
          CustomTabInactiveTintColor: '#ccc',
          activeTintColor: 'white',
          headerShown: false,
        }}>
        {tabs.map((tab, index) => (
          <Tab.Screen key={index} name={tab.name} component={tab.component} />
        ))}
      </Tab.Navigator>
      <FloatingButton onPress={() => navigation.navigate('BlogScreen')}  style={styles.floatingButton} />
    </>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    left: '50%',
    transform: [{ translateX: -130 }], // Adjust based on the button's width
    backgroundColor: theme.backgroundColor.orange,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30, // Match the floating button's border radius with the tab bar
    borderTopRightRadius: 30, // Match the floating button's border radius with the tab bar
  },
});

export default BottomTabNavigator;
