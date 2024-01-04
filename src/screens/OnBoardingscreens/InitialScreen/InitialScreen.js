import React, { useState, useRef } from 'react';
import {
  Dimensions,
  StatusBar,
  Text,
  View,
  Image,
  ImageBackground,
  FlatList
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import notifee from '@notifee/react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// Constants
import { onboardingData } from '../../../constants/onBoardingData';
import theme from '../../../constants/theme';
// Styles
import { styles } from './styles';
import commonImagePath from '../../../constants/images';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton/CustomButton';

export default function InitialScreen() {
  // Use state
  const [currentPage, setCurrentPage] = useState(0);

  // variables
  const { width } = Dimensions.get('window');
  const navigation = useNavigation();

  // useRef
  const flatListRef = useRef(null);

  // Functions
  const handleNextSlide = () => {
    if (currentPage < onboardingData.length - 1 && flatListRef.current) {
      setCurrentPage(currentPage + 1);
      flatListRef.current.scrollToIndex({ index: currentPage + 1 });
    } else {
      onDisplayNotification()
      navigation.navigate('LoginScreen');
    }
  };

  async function onDisplayNotification() {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: {
          id: 'default',
        },
      },
    });
  }


  // Render UI ..................
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
      <ImageBackground source={commonImagePath.backgroundCurve} resizeMode="cover" style={styles.background} />
      <View style={styles.data}>
        <FlatList
          ref={flatListRef}
          data={onboardingData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={{ width, height: '100%' }}>
              <View style={styles.slide}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
          onMomentumScrollEnd={event => {
            const indexOfNextScreen = Math.floor(
              event.nativeEvent.contentOffset.x / width,
            );
            setCurrentPage(indexOfNextScreen);
          }}
        />
        {currentPage < onboardingData.length && (
          <View style={styles.pagination}>
            {onboardingData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentPage ? styles.paginationDotActive : null,
                ]}
              />
            ))}
          </View>
        )}
        <View style={styles.buttonContainer}>
          <CustomButton
            logInButton
            label="GET STARTED"
            handlePress={handleNextSlide}
          />
        </View>
      </View>
    </View>
  );
}


