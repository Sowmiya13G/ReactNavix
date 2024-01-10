/* eslint-disable prettier/prettier */
// CustomTab.js
import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../constants/theme';

const { width } = Dimensions.get('window');

const CustomTab = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.CustomTabLabel || route.name;

          const icon =
            route.name === 'HomeTab'
              ? 'home'
              : route.name === 'ItemTab'
              ? 'tasks'
              : route.name === 'UserTab'
              ? 'question'
              : route.name === 'DashboardTab'
              ? 'user'
              : 'tags';

          return (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={state.index === index ? { selected: true } : {}}
              onPress={() => navigation.navigate(route.name)}
              key={`${index}--${route.key}`}>
              <View style={styles.tabButton}>
                <Icon
                  name={icon}
                  size={28}
                  color={state.index === index ? '#FFFFFF' : '#999999'}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
    backgroundColor: theme.backgroundColor.white,
    height: 50,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
});

export default CustomTab;
