/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { useState, useRef } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// Constants
import theme from '../../../constants/theme';
import { strings } from '../../../constants/strings';

// Styles
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton/CustomButton';


const OtpScreen = () => {

    //local ref
    const otpRef = useRef(null);

    //local state
    const [seconds, setSeconds] = useState(0);
    const [OTP, setOTP] = useState(false);
    const [OTPId, setOTPId] = useState("");
    // Variales
    const navigation = useNavigation();

    //Functions
    const goBack = () => {
        navigation.navigate('WelcomeScreen');
      }
    const handleContinue = () => {
        navigation.navigate('HomeScreen')
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
           <View style={styles.header}>
        <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
          <Icon name="angle-left" size={30} color={theme.fontColors.blueTheme} />
        </TouchableOpacity>
        <Text style={styles.title}>{strings.medicalHistory}</Text>
      </View>

                <Spacer height={heightPercentageToDP('15%')} />

                <Text style={styles.title}>{strings.verify}</Text>
                <Spacer height={heightPercentageToDP('4%')} />

                <Text style={styles.text}>{strings.sent}</Text>
                <Spacer height={heightPercentageToDP('7%')} />
                <View style={styles.otpContainer}>
                    <OTPInputView
                        style={styles.text}
                        pinCount={6}
                        // secureTextEntry
                        ref={otpRef}
                        // autoFocusOnLoad={false}
                        codeInputFieldStyle={styles.otpInput}
                        onCodeFilled={(code) => {
                            setOTP(code);
                        }}
                        onCodeChanged={(code) => {
                            setOTP(code);
                        }}
                    />

                </View>
                <Spacer height={heightPercentageToDP('5%')} />
                <Text style={styles.option}>{strings.wait}</Text>
                <Spacer height={heightPercentageToDP('8%')} />
                <View style={styles.buttonContainer}>
                    <CustomButton
                        primaryButton
                        label={strings.verify}
                        handlePress={handleContinue}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default OtpScreen;
