import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Animated from 'react-native-reanimated';
import HomeScreen from '../screens/BottomTabScreens/HomeScreen/HomeScreen';
import PriceScreen from '../screens/BottomTabScreens/PriceScreen/PriceScreen';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const translateX = Animated.Value(0);
  const scale = Animated.Value(0.8);

  const onTabPress = route => {
    Animated.spring(translateX, {
      toValue: route.name === 'HomeTab' ? 0 : 1,
    }).start();
    Animated.spring(scale, {
      toValue: 1,
    }).start();
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateX,
              },
              {
                scaleY: scale,
              },
            ],
          }}>
          <HomeScreen />
        </Animated.View>
      </Tab.Screen>
      <Tab.Screen
        name="PriceTab"
        component={PriceScreen}
        options={{
          tabBarLabel: 'Price',
          headerShown: false,
        }}>
        <Animated.View
          style={{
            transform: [
              {
                translateX,
              },
              {
                scaleY: scale,
              },
            ],
          }}>
          <PriceScreen />
        </Animated.View>
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
