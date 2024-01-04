import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// Constants
import theme from '../../../constants/theme';
import { strings } from '../../../constants/strings';

// Styles
import { styles } from './styles';
import commonImagePath from '../../../constants/images';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';


const WelcomeScreen = () => {
    //Usestate
    const [phoneNumber, setPhoneNumber] = useState('');

    // Variales
    const navigation = useNavigation();

    //Functions
    const handleContinue = () => {
        const phoneNumberRegex = /^\d{10}$/;

        if (phoneNumberRegex.test(phoneNumber)) {
            navigation.navigate('OtpScreen');
        } else {
            console.log('Invalid phone number');
        }
    };
    return (
        <SafeAreaView style={styles.container}>
                {/* {/* <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" /> */}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <ImageBackground source={commonImagePath.backgroundCurve} resizeMode="cover" style={styles.background} />
                <Image source={commonImagePath.doc} style={styles.image} />
                <View style={styles.content}>
                    <Text style={styles.title}>{strings.welcomeTo}</Text>
                    <Spacer height={heightPercentageToDP('2.5%')} />
                    <Text style={styles.data}>{strings.enterNumber}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        placeholder="Mobile Number"
                        style={styles.input}
                        icon={commonImagePath.mobile}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        keyboardType="numeric"
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.option}>{strings.account}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.option}>{strings.loginWith}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.option}>{strings.forgotPassword}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            logInButton
                            label={strings.continue}
                            handlePress={handleContinue}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView> 
        </SafeAreaView>
    );
};

export default WelcomeScreen;
