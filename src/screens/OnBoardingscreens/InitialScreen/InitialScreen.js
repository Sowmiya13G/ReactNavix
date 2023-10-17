import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  PixelRatio,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import {styles} from './styles';
export default function InitialScreen() {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {width, height} = Dimensions.get('window');

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
  const navigation = useNavigation();

  const handleCompleteSlider = () => {
    navigation.navigate('SignupScreen');
  };
  const {currentPage: pageIndex} = sliderState;
  console.log('pageIndex:', pageIndex);
  return (
    <>
      <CommonGradient>
        <StatusBar backgroundColor="#37ECBA" barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <ScrollView
            style={{flex: 1}}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={event => {
              setSliderPage(event);
            }}>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                {/* <Image
                  source={require('../../../assets/gifs/cashier.gif')}
                  style={styles.imageStyle}
                /> */}
                <Image
                  source={require('../../../assets/images/online.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.header}>Nature Imitates Art</Text>
                <Text style={styles.paragraph}>....something like that</Text>
              </View>
            </View>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                {/* <Image
                  source={require('../../../assets/gifs/bag.gif')}
                  style={styles.imageStyle}
                /> */}
                <Image
                  source={require('../../../assets/images/checkout.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.header}>Nature Imitates Art</Text>
                <Text style={styles.paragraph}>....something like that</Text>
              </View>
            </View>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                {/* <Image
                  source={require('../../../assets/gifs/shopping.gif')}
                  style={styles.imageStyle}
                />*/}
                <Image
                  source={require('../../../assets/images/ads.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.header}>Nature Imitates Art</Text>
                <Text style={styles.paragraph}>....something like that</Text>
              </View>
            </View>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                {/* <Image
                  source={require('../../../assets/gifs/pay.gif')}
                  style={styles.imageStyle}
                /> */}
                <Image
                  source={require('../../../assets/images/bag.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.header}>Nature Imitates Art</Text>
                <Text style={styles.paragraph}>....something like that</Text>
              </View>
            </View>
            <View style={{width, height}}>
              <View style={styles.wrapper}>
                {/* <Image
                  source={require('../../../assets/gifs/stalls.gif')}
                  style={styles.imageStyle}
                /> */}
                <Image
                  source={require('../../../assets/images/web.png')}
                  style={styles.imageStyle}
                />
                <Text style={styles.header}>Nature Imitates Art</Text>
                <Text style={styles.paragraph}>....something like that</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.paginationWrapper}>
            {Array.from(Array(4).keys()).map(index => (
              <View
                style={[
                  styles.paginationDots,
                  {opacity: pageIndex === index ? 1 : 0.2},
                ]}
                key={index}
              />
            ))}
          </View>
          <View style={styles.completeButton}>
            {pageIndex === 3 && (
              <TouchableOpacity
                onPress={handleCompleteSlider}
                style={styles.completeButton}>
                <Text style={styles.completeButtonText}>Complete</Text>
                <Icon
                  name="check"
                  size={24}
                  color="#FFFFFF"
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </CommonGradient>
    </>
  );
}
