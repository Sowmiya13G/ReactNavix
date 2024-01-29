import React, {useState, useEffect, useRef} from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  FlatList,
  AppState as RNAppState,
} from 'react-native';

// Packages
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import notifee from '@notifee/react-native';
import { CommonActions } from '@react-navigation/native';
import { EventType } from '@notifee/react-native';

// Styles
import {styles} from './styles';

// Constants
import { data } from '../../../constants/onBoardingData';
import theme from '../../../constants/theme';


export default function InitialScreen() {

  // Variables
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');

  const appState = useRef(RNAppState.currentState);
  console.log('appState', appState)
  // use State
  const [sliderState, setSliderState] = useState({currentPage: 0});
  
  // Functions
  const setSliderPage = event => {
    const {currentPage} = sliderState;
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };
  const handleCompleteSlider = () => {
    navigation.navigate('HomeScreen');
  };

  
  const {currentPage: pageIndex} = sliderState;

  async function onDisplayNotification() {
    await notifee.requestPermission();
  
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
  
    const notification = await notifee.displayNotification({
      title: 'Hey User',
      body: 'Your products are waiting',
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        sound: 'default',
        pressAction: {
          id: 'default',
          data: {
            screen: 'home',
          },
        },
      },
    });
    console.log('Notification displayed:', notification);
    if (notification.pressAction) {
      console.log('Press Action data:', notification.pressAction.data);
    }
  
    if (notification.pressAction) {
      const { screen } = notification.pressAction.data;
      if (screen === 'home') {
        navigation.dispatch(
          CommonActions.navigate({
            name: 'HomeScreen',
          })
        );
      }
    }
  }

  // Use Effect
  useEffect(() => {
    return notifee.onForegroundEvent(({ type, detail }) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', detail.notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', detail.notification);
          navigation.navigate('HomeScreen');
          break;
      }
    });
  }, [onDisplayNotification]);
 
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={onDisplayNotification}>
        <Text style={styles.notification}>Send Notification</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ width, height: '100%' }}>
            <View style={styles.wrapper}>
              <Image source={item.image} style={styles.imageStyle} />
              <Text style={styles.header}>{item.title}</Text>
              <Text style={styles.paragraph}>{item.description}</Text>
            </View>
          </View>
        )}
        onScroll={event => {
          setSliderPage(event);
        }}
      />
      <View style={styles.paginationWrapper}>
        {Array.from(Array(data.length).keys()).map(index => (
          <View
            style={[
              styles.paginationDots,
              { opacity: pageIndex === index ? 1 : 0.2 },
            ]}
            key={index}
          />
        ))}
      </View>
      <View style={styles.completeButton}>
        {pageIndex === data.length - 1 && (
          <TouchableOpacity
            onPress={handleCompleteSlider}
            style={styles.completeButton}>
            <Text style={styles.completeButtonText}>Complete</Text>
            <Icon name="check" size={24} color={theme.fontColors.white} style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
