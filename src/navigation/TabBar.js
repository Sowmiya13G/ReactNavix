import React, {useEffect, useRef} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Animated,
  StyleSheet,
  Text,
} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../constants/theme';

const {width} = Dimensions.get('window');
const TAB_BAR_WIDTH = width / 2;
const ANIMATED_PART_HEIGHT = 6;

const TabBar = ({state, descriptors, navigation}) => {
  const animationHorizontalValue = useRef(new Animated.Value(0)).current;

  const animate = index => {
    Animated.spring(animationHorizontalValue, {
      toValue: index * TAB_BAR_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animate(state.index);
  }, [state.index]);

  return (
    <View style={styles.container}>
      <Animated.View style={styles.animatedContainer}>
        <Animated.View
          style={[
            styles.animatedView,
            {
              transform: [{translateX: animationHorizontalValue}],
            },
          ]}
        />
      </Animated.View>

      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel || route.name;

          const icon =
            route.name === 'HomeTab'
              ? 'home'
              : route.name === 'PriceTab'
              ? 'tags'
              : route.name === 'ItemTab'
              ? 'tasks'
              : 'user-circle-o';

          return (
            <TouchableWithoutFeedback
              accessibilityRole="button"
              accessibilityState={state.index === index ? {selected: true} : {}}
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
    flexDirection: 'column',
    borderTopColor: 'grey',
    borderTopWidth: 0.5,
    backgroundColor: theme.backgroundColor.saddleBrown5,
    height: 50,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    marginTop: 5,
  },
  animatedView: {
    width: TAB_BAR_WIDTH,
    height: ANIMATED_PART_HEIGHT,
    backgroundColor: theme.backgroundColor.white,
  },
  animatedContainer: {
    width: TAB_BAR_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabTextActive: {
    color: theme.fontColors.white,
  },
  tabTextInactive: {
    color: '#999999',
  },
});

export default TabBar;
