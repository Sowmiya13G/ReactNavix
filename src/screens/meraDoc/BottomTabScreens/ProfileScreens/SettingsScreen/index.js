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
import theme from '../../../../../constants/theme';
import { strings } from '../../../../../constants/strings';
import commonImagePath from '../../../../../constants/images';
import CustomButton from '../../../../../components/CustomButton/CustomButton';
import CustomInput from '../../../../../components/CustomInput/CustomInput';

import Spacer from '../../../../../components/Spacer';
// Styles
import { styles } from './styles';


const SettingsScreen = () => {
    //Usestate
    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })
    // Variales
    const navigation = useNavigation();

    //Functions
    const handleContinue = () => {

    };



    // Render UI............
    const renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ImageBackground source={commonImagePath.backgroundCurve} resizeMode="cover" style={styles.background} />
                    <View style={styles.content}>
                        <Text style={styles.title}>{strings.changePassword}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <CustomInput
                            label={strings.currentPassword}
                            placeholder="Enter here"
                            style={styles.input}
                            suffixIcon={commonImagePath.eye}
                            value={password.currentPassword}
                            onChangeText={(text) => setPassword(text)}
                            keyboardType="numeric"
                        />
                        <Spacer height={heightPercentageToDP('2%')} />
                        <CustomInput
                            label={strings.newPassword}
                            placeholder="Enter here"
                            style={styles.input}
                            suffixIcon={commonImagePath.eye}
                            value={password.newPassword}
                            onChangeText={(text) => setPassword(text)}
                            keyboardType="numeric"
                        />
                        <Spacer height={heightPercentageToDP('2%')} />
                        <CustomInput
                            label={strings.confirmPassword}
                            placeholder="Enter here"
                            style={styles.input}
                            suffixIcon={commonImagePath.eye}
                            value={password.confirmPassword}
                            onChangeText={(text) => setPassword(text)}
                            keyboardType="numeric"
                        />
                        <Spacer height={heightPercentageToDP('2%')} />
                        <Text style={styles.option}>{strings.deleteAcc}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={styles.buttonContainer}>
                            <CustomButton
                                primaryButton
                                label='UPDATE'
                                handlePress={handleContinue}
                            />
                        </View>
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
                <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                    <Icon name="angle-left" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                </TouchableOpacity>
                <Spacer width={widthPercentageToDP('5%')} />
                <Text style={styles.heading}>Settings</Text>
             
                <Spacer width={widthPercentageToDP('35%')} />

                <Image source={commonImagePath.call} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
       {renderHeader()}
            <FlatList
                data={['SETTINGS']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader}
            />
        </SafeAreaView>
    );
};
export default SettingsScreen;
