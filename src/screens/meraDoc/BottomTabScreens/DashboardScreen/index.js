/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground,
} from 'react-native';
import Video from 'react-native-video';
// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';

// Constants
import theme from '../../../../constants/theme';
import { strings } from '../../../../constants/strings';
import {  ouSpeakersData, servicesdata, testimonialData, instData, partnerData, corporateData } from '../../../../constants/onBoardingData';
import commonImagePath from '../../../../constants/images';
// Styles
import { styles } from './styles';
import Spacer from '../../../../components/Spacer';
import CustomButton from '../../../../components/CustomButton/CustomButton';

 const DashboardScreen = () => {
    const [testimonialIndex, setTestimonialIndex] = useState(0);
    const [partnerIndex, setPartnerIndex] = useState(0);
    const [trustIndex, setTrustIndex] = useState(0);
    const videoPlayer = React.useRef();
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const openView = () => {
        setOpen(!open);
    };
    const goBack = () => {
        navigation.navigate('BlogScreen');
    };
    const handleContinue = () => {
        // navigation.navigate('BlogScreen');
    };
    const goToNext = () => {
        navigation.navigate('BookConsultaionScreen')
    }
    // Render UI .........................
    // Render Body
    const renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentView}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.speakers}>{strings.onBoarding}</Text>
                            <Spacer height={heightPercentageToDP('3%')} />
                            <Text style={styles.title}>{strings.answer}</Text>
                        </View>
                        <Spacer width={widthPercentageToDP('2%')} />
                        <Image source={commonImagePath.pana} style={styles.pana} resizeMode='contain' />
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <Progress.Bar progress={0.4} width={200} />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.title}>{strings.completedPercent}</Text>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <TouchableOpacity style={styles.completeButton} onPress={goToNext()}>
                        <Text style={styles.complete}>{strings.completeNow}</Text>
                        <Spacer width={widthPercentageToDP('4%')} />
                        <Icon
                            name={'arrow-right'}
                            size={20}
                            color={theme.fontColors.blueTheme}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.subPlans}> {strings.subPlans} </Text>
                <View style={styles.contentView}>
                    <Text style={styles.famCare}> {strings.famCare} </Text>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={commonImagePath.plan1} />
                        <Spacer width={widthPercentageToDP('3%')} />
                        <Text style={styles.title}>{strings.plan1}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={commonImagePath.plan2} />
                        <Spacer width={widthPercentageToDP('3%')} />
                        <Text style={styles.title}>{strings.plan2}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={commonImagePath.plan3} />
                        <Spacer width={widthPercentageToDP('3%')} />
                        <Text style={styles.title}>{strings.plan3}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={{ flexDirection: 'row', width: widthPercentageToDP('75%') }}>
                        <Image source={commonImagePath.plan4} />
                        <Spacer width={widthPercentageToDP('3%')} />
                        <Text style={styles.title}>{strings.plan4}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={{ flexDirection: 'row', width: widthPercentageToDP('80%') }}>
                        <Image source={commonImagePath.plan5} />
                        <Spacer width={widthPercentageToDP('3%')} />
                        <Text style={styles.title}>{strings.plan5}</Text>
                    </View>
                    <Text style={styles.knowMore}>{strings.knowMore}</Text>
                </View>
                <Text style={styles.subPlans}> {strings.services} </Text>
                <View style={styles.serviceView}>
                    <FlatList
                        data={servicesdata}
                        renderItem={({ item }) => (
                            <View style={styles.serviceCard}>
                                <Image source={item.image} />
                                <Spacer height={heightPercentageToDP('2%')} />
                                <Text style={styles.serviceTitle}>{item.title}</Text>
                                <Spacer height={heightPercentageToDP('1%')} />
                                <Text style={styles.serviceDescription}>{item.description}</Text>
                                <Spacer height={heightPercentageToDP('2%')} />
                                <TouchableOpacity style={styles.bookNowButton}>
                                    <Text style={styles.knowMore}>{strings.bookNow}</Text>
                                    <Spacer width={widthPercentageToDP('2%')} />
                                    <Icon
                                        name={'arrow-right'}
                                        size={18}
                                        color={theme.fontColors.blueTheme}
                                        style={styles.arrowIcon}
                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true} // Set horizontal to false for a vertical list
                        contentContainerStyle={styles.containerStyle}
                    />
                </View>
                <View style={{ flexDirection: 'row', width: widthPercentageToDP('90%'), justifyContent: 'space-between' }}>
                    <Text style={styles.checkOut}> {strings.checkOut} </Text>
                    <Spacer width={widthPercentageToDP('13%')} />
                    <Text style={styles.knowMore}>View all</Text>
                </View>
                <View style={styles.videoPlayer}>
                    <Video
                        ref={ref => (videoPlayer.current = ref)}
                        source={{
                            uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                        }}
                        paused={false}
                        style={styles.backgroundVideo}
                        thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                        repeat={true}
                    />
                </View>
                {renderPaginationDots(10, partnerIndex)}
                <View style={styles.contentView}>
                    <View style={{ flexDirection: 'row' , justifyContent: 'center'}}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={styles.speakers}>{strings.famSpl}</Text>
                            <Spacer height={heightPercentageToDP('3%')} />
                            <Text style={styles.title}>{strings.bannerLoerem}</Text>
                        </View>
                        <Spacer width={widthPercentageToDP('2%')} />
                        <Image source={commonImagePath.family} style={styles.family} resizeMode='contain' />
                    </View>
                    <TouchableOpacity style={styles.consult} onPress={goToNext()}>
                        <Text style={styles.consultText}>{strings.consult}</Text>
                        <Spacer width={widthPercentageToDP('4%')} />
                        <Icon
                            name={'arrow-right'}
                            size={20}
                            color={theme.fontColors.white}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                {renderPaginationDots(2, partnerIndex)}

                <View style={styles.contentView}>
                    <FlatList
                        data={ouSpeakersData}
                        renderItem={({ item }) => (
                            <View style={styles.list}>
                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.name}>{item.name}</Text>
                                <Spacer height={heightPercentageToDP('0.5%')} />
                                <Text style={styles.serviceDescription}>{strings.detail}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={styles.containerStyle}
                    />
                </View>
                <View style={styles.banner}>
                    <View style={{ flexDirection: 'row' , justifyContent: 'center',}}>
                        <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.bannerText}>{strings.bannerTit}</Text>
                            <Spacer height={heightPercentageToDP('2%')} />
                            <Text style={styles.bannerText}>{strings.bannerDes}</Text>
                        </View>
                        <Spacer width={widthPercentageToDP('2%')} />
                        <Image source={commonImagePath.content} style={styles.bannerImg} resizeMode='contain' />
                    </View>
                    <TouchableOpacity style={styles.buttonView} onPress={goToNext()}>
                        <Text style={styles.buttonText}>{strings.read}</Text>
                        <Spacer width={widthPercentageToDP('4%')} />
                        <Icon
                            name={'arrow-right'}
                            size={20}
                            color={theme.fontColors.blueTheme}
                            style={styles.arrowIcon}
                        />
                    </TouchableOpacity>
                </View>
                <Spacer height={heightPercentageToDP('3%')} />

                <View style={styles.serviceView}>
                    <FlatList
                        data={corporateData}
                        renderItem={({ item }) => (
                            <View style={styles.serviceCard}>
                                <Image source={item.image} />
                                <Spacer height={heightPercentageToDP('2%')} />
                                <Text style={styles.serviceTitle}>{item.title}</Text>
                                <Spacer height={heightPercentageToDP('1%')} />
                                <Text style={styles.serviceDescription}>{item.description}</Text>
                                <Spacer height={heightPercentageToDP('5%')} />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={styles.containerStyle}
                    />
                </View>
                <Spacer height={heightPercentageToDP('3%')} />

                <Text style={styles.subPlans}> {strings.partners} </Text>
                <View style={styles.serviceView}>
                    <FlatList
                        data={partnerData}
                        renderItem={({ item }) => (
                            <View style={{ padding: 5 }}>
                                <Image source={item.image} style={{ alignSelf: 'center', margin: 15 }} />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={styles.containerStyle}
                    />
                </View>
                {renderPaginationDots(2, partnerIndex)}

                <Spacer height={heightPercentageToDP('3%')} />

                <Text style={styles.subPlans}> {strings.testimonial} </Text>
                <View style={styles.serviceView}>
                    <FlatList
                        data={testimonialData}
                        renderItem={({ item }) => (
                            <View style={styles.testCard}>
                                <Image source={item.image} />
                                <Spacer height={heightPercentageToDP('1%')} />
                                <Text style={styles.serviceDescription}>{item.description}</Text>
                                <Spacer height={heightPercentageToDP('2%')} />
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={item.profile} />
                                    <Spacer width={widthPercentageToDP('5%')} />
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text style={styles.serviceTitle}>{item.title}</Text>
                                        <Text style={{ color: 'gray', fontSize: theme.fontSizes.mediumFont }}>New delhi</Text>
                                    </View>
                                </View>
                                <Spacer height={heightPercentageToDP('5%')} />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={styles.containerStyle}
                    />
                </View>
                {renderPaginationDots(6, testimonialIndex)}
                <Spacer height={heightPercentageToDP('3%')} />

                <Text style={styles.subPlans}> {strings.instTrust} </Text>
                <View style={styles.serviceView}>
                    <FlatList
                        data={instData}
                        renderItem={({ item }) => (
                            <View style={{ padding: 5, alignSelf: 'center' }}>
                                <Image source={item.image} style={{ alignSelf: 'center', margin: 5 }} />
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        horizontal={true}
                        contentContainerStyle={styles.containerStyle}
                    />
                </View>
                {renderPaginationDots(2, trustIndex)}
            </SafeAreaView>
        );
    };
    const renderPaginationDots = (totalDots, currentIndex) => (
        <View style={styles.paginationDotsContainer}>
            {Array.from({ length: totalDots }).map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.paginationDot,
                        { backgroundColor: index === currentIndex ? theme.fontColors.blueTheme : 'gray' },
                    ]}
                />
            ))}
        </View>
    );

    // Render Header
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Spacer height={heightPercentageToDP('8%')} />
                <TouchableOpacity onPress={() => goBack()}>
                    <Icon
                        name="list"
                        size={25}
                        color={theme.fontColors.white}
                        style={styles.backIcon}
                    />
                </TouchableOpacity>
                <Text style={styles.heading}>{strings.welcomeTo}</Text>
                <Icon
                    name="volume-control-phone"
                    size={25}
                    color={theme.fontColors.white}
                    style={styles.callIcon}
                />
                <Icon
                    name="bell"
                    size={25}
                    color={theme.fontColors.white}
                    style={styles.bellIcon}
                />
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
            <StatusBar
                backgroundColor={theme.backgroundColor.blueTheme}
                barStyle="light-content"
            />
            <FlatList
                data={['WEBINAR']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );
};
export default DashboardScreen