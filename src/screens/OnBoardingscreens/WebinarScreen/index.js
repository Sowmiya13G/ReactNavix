/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import Video from 'react-native-video';
// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// Constants
import theme from '../../../constants/theme';
import { strings } from '../../../constants/strings';
import { ouSpeakersData } from '../../../constants/onBoardingData';
// Styles
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton/CustomButton';


export const WebinarScreen = () => {
    const videoPlayer = React.useRef();
    const navigation = useNavigation()
    const [open, setOpen] = useState(false)
    const openView = () => {
        setOpen(!open)
    }
    const goBack = () => {
        navigation.navigate('OtpScreen');
      }
    const handleContinue = () => {
        navigation.navigate('HomeScreen');
      };
    // Render UI .........................
    // Render Body
    const renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentView}>
                    <Text style={styles.speakers}>{strings.speakers}</Text>

                    <FlatList
                        data={ouSpeakersData}
                        renderItem={({ item }) => (
                            <View style={styles.list}>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Spacer height={heightPercentageToDP('0.5%')} />
                                <Text style={styles.detailsText}>{strings.detail}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={styles.containerStyle}
                    />
                    <Spacer height={heightPercentageToDP('3%')} />
                    <Text style={styles.title}>{strings.watch}</Text>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <Text style={styles.text}>{strings.content}</Text>

                </View>
                <View style={styles.videoPlayer}>
                    <Video
                        ref={(ref) => (videoPlayer.current = ref)}
                        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        paused={false}
                        style={styles.backgroundVideo}
                        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                        repeat={true}
                    />
                </View>
                <TouchableOpacity onPress={openView} style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Text style={styles.title}>{strings.view}</Text>
                    <Spacer width={widthPercentageToDP('3%')}/>
                    <Icon name={open ? 'angle-up' : 'angle-down'} size={30} color={theme.fontColors.blueTheme} style={styles.arrowIcon} />
                </TouchableOpacity>
                {open && (
                    <View style={styles.contentView}>
                    <FlatList
                        data={ouSpeakersData}
                        renderItem={({ item }) => (
                            <View style={[styles.list]}>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Spacer height={heightPercentageToDP('0.5%')} />
                                <Text style={styles.detailsText}>{strings.detail}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={styles.containerStyle}
                    />
                    </View>
                )}
            </SafeAreaView>
        );

    };

    // Render Header
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Spacer height={heightPercentageToDP('8%')} />
                <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                    <Icon name="angle-left" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.heading}>{strings.webniars}</Text>
                <Spacer width={widthPercentageToDP('35%')} />
                <Icon name="volume-control-phone" size={30} color={theme.fontColors.white} style={styles.callIcon} />
            </View>
        );
    };

  // Render Footer
  const renderFooter = () => {
    return (
      <View style={styles.button}>
        <CustomButton
          primaryButton
          label={strings.continue}
          handlePress={handleContinue}
        />
      </View>
    );
  };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />

            <FlatList
                data={['WEBINAR']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
            {renderFooter()}
        </SafeAreaView>
    );

};
