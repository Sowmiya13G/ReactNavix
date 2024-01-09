/* eslint-disable prettier/prettier */
// BottomTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTab from './CustomTab';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet } from 'react-native';
import FloatingButton from './FloatingButton';
import { UserProfileScreen } from '../screens/BottomTabScreens/UserProfileScreen';
import { DashboardScreen } from '../screens/OnBoardingscreens/DashboardScreen';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import ItemScreen from '../screens/BottomTabScreens/ItemsScreen';
import { useNavigation } from '@react-navigation/native';
import theme from '../constants/theme';
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const navigation = useNavigation();
  const tabs = [
    {
      name: 'HomeTab',
      component: HomeScreen,
      iconName: 'home',
    },
    {
      name: 'ItemTab',
      component: ItemScreen,
      iconName: 'tasks',
    },
    {
      name: 'UserTab',
      component: UserProfileScreen,
      iconName: 'clipboard',
    },
    {
      name: 'DashboardTab',
      component: DashboardScreen,
      iconName: 'user',

    },
  ];
  return (
    <>
      <Tab.Navigator
        CustomTab={props => <CustomTab {...props} />}
        initialRouteName={'HomeTab'}
        screenOptions={{
          CustomTabActiveTintColor: 'blue',
          CustomTabInactiveTintColor: '#ccc',
          activeTintColor: 'white',
          headerShown: false,
        }}>
      {tabs.map((tab, index) => (
          <Tab.Screen key={index} name={tab.name} component={tab.component} options={{
            title: '',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name={tab.iconName} size={23} color={color} />
            ),
          }} />
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
    transform: [{ translateX: -130 }], 
    backgroundColor: theme.backgroundColor.orange,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30,
  },
});

export default BottomTabNavigator;
