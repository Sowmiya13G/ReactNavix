import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  PixelRatio,
} from 'react-native';
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

  const {currentPage: pageIndex} = sliderState;

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
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
              <Image
                source={require('../../../assets/gifs/cashier.gif')}
                style={styles.imageStyle}
              />
              <Text style={styles.header}>Nature Imitates Art</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View>
          </View>
          <View style={{width, height}}>
            <View style={styles.wrapper}>
              <Image
                source={require('../../../assets/gifs/bag.gif')}
                style={styles.imageStyle}
              />

              <Text style={styles.header}>Nature Imitates Art</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View>
          </View>
          <View style={{width, height}}>
            <View style={styles.wrapper}>
              <Image
                source={require('../../../assets/gifs/shopping.gif')}
                style={styles.imageStyle}
              />

              <Text style={styles.header}>Nature Imitates Art</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View>
          </View>
          <View style={{width, height}}>
            <View style={styles.wrapper}>
              <Image
                source={require('../../../assets/gifs/pay.gif')}
                style={styles.imageStyle}
              />
              <Text style={styles.header}>Nature Imitates Art</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View>
          </View>
          <View style={{width, height}}>
            <View style={styles.wrapper}>
              <Image
                source={require('../../../assets/gifs/stalls.gif')}
                style={styles.imageStyle}
              />
              <Text style={styles.header}>Nature Imitates Art</Text>
              <Text style={styles.paragraph}>....something like that</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(5).keys()).map(index => (
            <View
              style={[
                styles.paginationDots,
                {opacity: pageIndex === index ? 1 : 0.2},
              ]}
              key={index}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}
