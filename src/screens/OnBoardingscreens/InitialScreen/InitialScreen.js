import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Linking
} from 'react-native';

// Packages
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';

// Styles
import {styles} from './styles';

// Constants
import { data } from '../../../constants/onBoardingData';
import theme from '../../../constants/theme';

export default function InitialScreen() {

  // Variables
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');

  
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
  // console.log('pageIndex:', pageIndex);

  async function onDisplayNotification() {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    const notification=await notifee.displayNotification({
      title: 'Hey User',
      body: 'Your products are waiting',
      android: {
        channelId,
        smallIcon: 'ic_launcher',
        pressAction: {
          id: 'default',
          data: {
            screen: 'home', 
          },
        },
      },
    });
    console.log('Notification displayed:', notification);
  }
 
  // Use Effect

  useEffect(() => {
    console.log('Initial Screen')
    // const unsubscribe = messaging().onNotificationOpenedApp(async (remoteMessage) => {
    //   console.log('Notification caused app to open from background state:', remoteMessage.notification);
    //   handleDeepLinking(remoteMessage);
    //   const screenType = remoteMessage.data.type;

    //   if (screenType) {
    //     if (screenType === 'home') {
    //       navigation.navigate('HomeScreen');
    //     } else {
    //       navigation.navigate(screenType);
    //     }
    //   }
    //   await notifee.cancelNotification(remoteMessage.notification.id);
    // });
    const unsubscribe = messaging().onNotificationOpenedApp(async (remoteMessage) => {
      handleDeepLinking(remoteMessage);
      await notifee.cancelNotification(remoteMessage.notification.id);
    });
    const checkInitialNotification = async () => {
      const initialNotification = await messaging().getInitialNotification();

      if (initialNotification) {
        // console.log('Notification caused app to open from quiet state:', initialNotification.notification);
        // const screenType = initialNotification.data.type;
        // console.log('screenType...', screenType);
        handleDeepLinking(initialNotification);
        await notifee.cancelNotification(initialNotification.notification.id);
      }
    };

    const handleDeepLinking = (message) => {
      const screenType = message.data.type;

      if (screenType) {
        if (screenType === 'home') {
          navigation.navigate('HomeScreen');
        } else {
          navigation.navigate(screenType);
        }
      }
       notifee.cancelNotification(message.notification.id);
    };

    checkInitialNotification();
    return unsubscribe;
  }, [navigation]);

  
 
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


 // useEffect(() => {
  //   const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification
  //     );
  //     const screenType = remoteMessage.data.type;
  //     if (screenType) {
  //       navigation.navigate(screenType);
  //     }
  //     notifee.cancelNotification(remoteMessage.notification.id);
  //   });
  //   const checkInitialNotification = async () => {
  //     const initialNotification = await messaging().getInitialNotification();
  //     if (initialNotification) {
  //       console.log(
  //         'Notification caused app to open from quiet state:',
  //         initialNotification.notification
  //       );
  //       const screenType = initialNotification.data.type;
  //       if (screenType) {
  //         navigation.navigate(screenType);
  //       }
  //       notifee.cancelNotification(initialNotification.notification.id);
  //     }
  //   };
  //   checkInitialNotification();
  //   return unsubscribe;
  // }, [navigation]);

  // render UI...........


 
  //   Linking.openURL(`reactnavix://itemscreen`);

//   const onDisplayNotification = async () => {
// try{

//     const initialNotification = await messaging().getInitialNotification();
//     if (initialNotification) {
//       console.log(
//         'Notification caused app to open from quiet state:',
//         initialNotification.notification
//       );
//       const screenType = initialNotification.data.type;
  
//       if (screenType) {
//         if (screenType === 'homescreen') {
//           navigation.navigate('HomeScreen');
//         } 
//       }
//       notifee.cancelNotification(initialNotification.notification.id);
//     }  
//   }      
//     catch(error) {
//       console.error(error)
//     }
//   };
  
//   return (
//     <>
//         <SafeAreaView style={styles.container}>
        
//         <TouchableOpacity
//                 onPress={onDisplayNotification}
//                >
//                 <Text  style={styles.notification}>Notification</Text>
//               </TouchableOpacity>
//           <ScrollView
//             style={{flex: 1}}
//             horizontal={true}
//             scrollEventThrottle={16}
//             pagingEnabled={true}
//             showsHorizontalScrollIndicator={false}
//             onScroll={event => {
//               setSliderPage(event);
//             }}>
//             <View style={{width, height}}>
//               <View style={styles.wrapper}>
             
//                 <Image
//                   source={require('../../../assets/images/online.png')}
//                   style={styles.imageStyle}
//                 />
//                 <Text style={styles.header}>Nature Imitates Art</Text>
//                 <Text style={styles.paragraph}>....something like that</Text>
//               </View>
//             </View>
//             <View style={{width, height}}>
//               <View style={styles.wrapper}>
               
//                 <Image
//                   source={require('../../../assets/images/checkout.png')}
//                   style={styles.imageStyle}
//                 />
//                 <Text style={styles.header}>Nature Imitates Art</Text>
//                 <Text style={styles.paragraph}>....something like that</Text>
//               </View>
//             </View>
//             <View style={{width, height}}>
//               <View style={styles.wrapper}>
//                 <Image
//                   source={require('../../../assets/images/ads.png')}
//                   style={styles.imageStyle}
//                 />
//                 <Text style={styles.header}>Nature Imitates Art</Text>
//                 <Text style={styles.paragraph}>....something like that</Text>
//               </View>
//             </View>
//             <View style={{width, height}}>
//               <View style={styles.wrapper}>
//                 <Image
//                   source={require('../../../assets/images/bag.png')}
//                   style={styles.imageStyle}
//                 />
//                 <Text style={styles.header}>Nature Imitates Art</Text>
//                 <Text style={styles.paragraph}>....something like that</Text>
//               </View>
//             </View>
//             <View style={{width, height}}>
//               <View style={styles.wrapper}>
//                 <Image
//                   source={require('../../../assets/images/web.png')}
//                   style={styles.imageStyle}
//                 />
//                 <Text style={styles.header}>Nature Imitates Art</Text>
//                 <Text style={styles.paragraph}>....something like that</Text>
//               </View>
//             </View>
//           </ScrollView>
//           <View style={styles.paginationWrapper}>
//             {Array.from(Array(4).keys()).map(index => (
//               <View
//                 style={[
//                   styles.paginationDots,
//                   {opacity: pageIndex === index ? 1 : 0.2},
//                 ]}
//                 key={index}
//               />
//             ))}
//           </View>
//           <View style={styles.completeButton}>
//             {pageIndex === 3 && (
//               <TouchableOpacity
//                 onPress={handleCompleteSlider}
//                 style={styles.completeButton}>
//                 <Text style={styles.completeButtonText}>Complete</Text>
//                 <Icon
//                   name="check"
//                   size={24}
//                   color="#FFFFFF"
//                   style={styles.icon}
//                 />
//               </TouchableOpacity>
//             )}
//           </View>
//         </SafeAreaView>
//     </>
//   );
// }
