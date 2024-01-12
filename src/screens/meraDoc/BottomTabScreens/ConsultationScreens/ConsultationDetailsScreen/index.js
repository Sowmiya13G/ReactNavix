import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

// Components
import ChoicePicker from '../../../../../components/ChoicePicker';
import Spacer from '../../../../../components/Spacer';
import CustomButton from '../../../../../components/CustomButton/CustomButton';

// Constants
import theme from '../../../../../constants/theme';
import { strings } from '../../../../../constants/strings';
import commonImagePath from '../../../../../constants/images';
import { Background } from '../../../../../components/Background/background';
// Styles
import { styles } from './styles';

const ConsultationDetailsScreen = ({ route }) => {
    // const { selectedTab } = route.params || { selectedTab: 'Upcoming' };
    const [selectedTab, setSelectedTab] = useState(selectedTab);

    const options = ['9:00am', '09:15am', '10:00am', '11:15am', '11:00am', '11:15am', '12:00am', '12:15am',]
    // Variales
    const navigation = useNavigation();


    handleOnPress = () => {

    }
    const handleContinue = () => {
        navigation.navigate('AppointmentDetails')
    }
    // Render UI .........................
    // Render Body
    const renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

                >
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.textView}>
                            <Text style={styles.texts}>{strings.genPhy}</Text>
                            <Spacer width={widthPercentageToDP('25%')} />
                        </View>
                        <View style={styles.textView}>
                            <Text style={styles.texts}>{strings.language}</Text>
                        </View>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />
                    <View style={styles.content}>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={styles.title}>{strings.speakToDoc}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={styles.data}>{strings.speakCont}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={commonImagePath.phoneCall} />
                            <Spacer width={widthPercentageToDP('3%')} />
                            <Text style={styles.texts}>{strings.speakNow}</Text>
                        </View>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={styles.data2}>{strings.selectDate}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ flexDirection: 'row' }}>
                            <Icon name="calendar" size={20} color={theme.fontColors.blueTheme} style={styles.icon} />
                            <Spacer width={widthPercentageToDP('3%')} />
                            <Text style={styles.data}>{strings.date}</Text>
                        </View>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={styles.data2}>{strings.prefferedSlot}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <ChoicePicker onOptionPress={handleOnPress()} options={options} showIcon={false} />
                    </View>
                    <View style={styles.button}>
                        <CustomButton
                            primaryButton
                            textStyle={styles.buttonTxt}
                            label={strings.bookCons}
                            handlePress={handleContinue}
                        />
                    </View>
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
                <Text style={styles.heading}>{strings.bookCons}</Text>
                <Spacer width={widthPercentageToDP('20%')} />
                <Icon name="volume-control-phone" size={25} color={theme.fontColors.white} style={styles.callIcon} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
            <Background
                backgroundImageStyle={styles.backgroundCurve}
            />
            <FlatList
                data={['BOOK_CONSULTATION']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );

};


export default ConsultationDetailsScreen;
