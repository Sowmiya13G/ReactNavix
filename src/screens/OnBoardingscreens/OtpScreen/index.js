import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

// Constants
import theme from '../../../constants/theme';
import { strings } from '../../../constants/strings';

// Styles
import { styles } from './styles';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton/CustomButton';


const OtpScreen = () => {
    // UseState
    const [otp, setOtp] = useState('');

    // Variales
    const navigation = useNavigation();

    //Functions
    const handleContinue = () => {
        navigation.navigate('HomeScreen')
    };
    return (
        <SafeAreaView >
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >
                <Text style={styles.title}>{strings.verify}</Text>
                <Spacer height={heightPercentageToDP('2%')} />

                <Text style={styles.option}>{strings.sent}</Text>
                <Spacer height={heightPercentageToDP('4%')} />
                <View style={styles.otpContainer}>
                    <TextInput
                        style={styles.otpInput}
                        placeholder="Enter OTP"
                        keyboardType="numeric"
                        maxLength={6}
                        onChangeText={(text) => setOtp(text)}
                    />
                </View>
                <Spacer height={heightPercentageToDP('2%')} />
                <Text style={styles.option}>{strings.wait}</Text>
                <Spacer height={heightPercentageToDP('2%')} />
                <View style={styles.buttonContainer}>
                    <CustomButton
                        logInButton
                        label={strings.verify}
                        handlePress={handleContinue}
                    />
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default OtpScreen;
