import React from 'react';

// Packages
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Custom Styles
import CustomTab from './CustomTab';
import FloatingButton from './FloatingButton';
import { styles } from './styles';

// Screens
import ConsultationStack from './BottomTabStacks';
import CompleteProfileScreen from '../../screens/meraDoc/BottomTabScreens/ProfileScreens/CompleteProfileScreen';
import BookConsultaionScreen from '../../screens/meraDoc/BottomTabScreens/ConsultationScreens/BookConsultation';
import HomeScreen from '../../screens/BottomTabScreens/HomeScreen';
import ItemScreen from '../../screens/BottomTabScreens/ItemsScreen';
import DashboardScreen from '../../screens/meraDoc/OnboardingScreens/DashboardScreen';
import WebinarScreen from '../../screens/meraDoc/OnboardingScreens/WebinarScreen';
import UserProfileScreen from '../../screens/meraDoc/BottomTabScreens/ProfileScreens/UserProfileScreen';
import BlogScreen from '../../screens/meraDoc/BottomTabScreens/BlogScreen';
const BottomTabNavigator = () => {
  // Variables
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const tabs = [
    {
      name: 'HomeTab',
      component: BookConsultaionScreen,
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



export default BottomTabNavigator;

 