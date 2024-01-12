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
import ConsultationStack from './BottomTabStacks/ConsultationStack';
import ProfileStack from './BottomTabStacks/ProfileStack';
import UserProfileScreen from '../../screens/meraDoc/BottomTabScreens/ProfileScreens/UserProfileScreen';
import BlogScreen from '../../screens/meraDoc/BottomTabScreens/BlogScreen';

const BottomTabNavigator = () => {
  // Variables
  const Tab = createBottomTabNavigator();
  const navigation = useNavigation();
  const tabs = [
    {
      name: 'HomeTab',
      component: ConsultationStack,
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
      component: ProfileStack,
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

 