import React from 'react';
import {Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BottomTabBar} from '@react-navigation/bottom-tabs';

const CustomTabBar = ({navigation}) => {
  const tabs = [
    {
      name: 'Home',
      icon: 'home',
    },
    {
      name: 'Price',
      icon: 'tags',
    },
  ];

  const renderTab = tab => {
    const focused = navigation.state.index === tabs.indexOf(tab);

    return (
      <BottomTabBar.Item
        key={tab.name}
        focused={focused}
        onPress={() => navigation.navigate(tab.name)}>
        <Image
          source={{uri: `https://example.com/icons/${tab.icon}.png`}}
          style={{width: 24, height: 24}}
        />
        <Text style={{fontSize: 12, color: focused ? '#37ECBA' : '#72AFD3'}}>
          {tab.name}
        </Text>
      </BottomTabBar.Item>
    );
  };
  return <BottomTabBar>{tabs.map(tab => renderTab(tab))}</BottomTabBar>;
};

export default CustomTabBar;
