import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

// Constants
import theme from '../../../../constants/theme';
import { strings } from '../../../../constants/strings';

// Styles
import { styles } from './styles';
import commonImagePath from '../../../../constants/images';
import Spacer from '../../../../components/Spacer';


const BookConsultaionScreen = ({route}) => {
    // const { selectedTab } = route.params || { selectedTab: 'Upcoming' };
    const [selectedTab, setSelectedTab] = useState(selectedTab);

    // Variales
    const navigation = useNavigation();
    // Render UI .........................
    // Render Body
    const renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

                >
                    {/* <ImageBackground source={commonImagePath.backgroundCurve} resizeMode="cover" style={styles.backgroundCurve} /> */}
                    <View style={styles.content}>
                        <Image source={commonImagePath.consults} style={styles.image} />
                        <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                            <Text style={styles.title}>{strings.bookConsult}</Text>
                            <Spacer height={heightPercentageToDP('1%')} />
                            <Text style={styles.data}>{strings.consultHours}</Text>
                            <Spacer height={heightPercentageToDP('2%')} />
                        </View>
                        <Text style={styles.option}>{strings.bookNowBtn}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />

                    <View style={styles.content}>
                        <Image source={commonImagePath.specialistImg} style={styles.image} />
                        <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                            <Text style={styles.title2}>{strings.bookConsult}</Text>
                            <Spacer height={heightPercentageToDP('1%')} />
                            <Text style={styles.data2}>{strings.consultHours}</Text>
                            <Spacer height={heightPercentageToDP('2%')} />
                        </View>
                        <Text style={styles.option2}>{strings.bookNowBtn}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <TouchableOpacity
                        style={[
                            styles.options,
                            selectedTab === 'Past' ? styles.selectedTab : null,
                        ]}
                        onPress={() => {
                            setSelectedTab('Past');
                            navigation.navigate('PastConsultaionScreen', { selectedTab: 'Upcoming' });
                        }}
                    >
                        <Text style={styles.optionText}>{strings.upComing}</Text>
                        <Icon name="angle-right" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <TouchableOpacity
                        style={[
                            styles.options,
                            selectedTab === 'Past' ? styles.selectedTab : null,
                        ]}
                        onPress={() => {
                            setSelectedTab('Past');
                            navigation.navigate('PastConsultaionScreen', { selectedTab: 'Past' });
                        }}
                    >
                        <Text style={styles.optionText}>{strings.pastConsult}</Text>
                        <Icon name="angle-right" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );

    };

    // Render Header
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Spacer height={heightPercentageToDP('8%')} />
                <TouchableOpacity onPress={() => goBack()} >
                    <Icon name="bars" size={25} color={theme.fontColors.white} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.heading}>{strings.bookConsult}</Text>
                <Spacer width={widthPercentageToDP('3%')} />
                <Icon name="volume-control-phone" size={25} color={theme.fontColors.white} style={styles.callIcon} />
                <Icon name="bell" size={25} color={theme.fontColors.white} style={styles.bellIcon} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />

            <FlatList
                data={['BOOK_CONSULTATION']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );

};


export default BookConsultaionScreen;
