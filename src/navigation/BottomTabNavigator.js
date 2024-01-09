/* eslint-disable prettier/prettier */
// BottomTabNavigator.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

// Packages
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Custom Styles
import CustomTab from './CustomTab';
import FloatingButton from './FloatingButton';

// Constants
import theme from '../constants/theme';

// Screens
import { UserProfileScreen } from '../screens/BottomTabScreens/UserProfileScreen';
import { DashboardScreen } from '../screens/OnBoardingscreens/DashboardScreen';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen';
import ItemScreen from '../screens/BottomTabScreens/ItemsScreen';
import { WebinarScreen } from '../screens/OnBoardingscreens/WebinarScreen';
import { BlogScreen } from '../screens/BottomTabScreens/BlogScreen';
import { CompleteProfileScreen } from '../screens/BottomTabScreens/CompleteProfileScreen';

const BottomTabNavigator = () => {
  // Variables
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const tabs = [
    {
      name: 'HomeTab',
      component: WebinarScreen,
      iconName: 'home',
      label:'Home'
    },
    {
      name: 'ItemTab',
      component: BlogScreen,
      iconName: 'tasks',
      label:'Medicines'
    },
    {
      name: 'UserTab',
      component: UserProfileScreen,
      iconName: 'clipboard',
      label: 'Diagnosis'
    },
    {
      name: 'DashboardTab',
      component: CompleteProfileScreen,
      iconName: 'user',
      label: 'Profile'

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
          tabBarLabel: tab.label,
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
