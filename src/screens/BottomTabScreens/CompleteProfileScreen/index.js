/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground
} from 'react-native';
// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// Constants
import theme from '../../../constants/theme';
import { strings, placeholders } from '../../../constants/strings';
import commonImagePath from '../../../constants/images';

// Styles
import { styles } from './styles';

// components
import CustomInput from '../../../components/CustomInput/CustomInput';
import Spacer from '../../../components/Spacer';
import CustomButton from '../../../components/CustomButton/CustomButton';
import GenderPicker from '../../../components/GenderPicker';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, selectFormData, addUserProfile } from '../../../redux/features/FormDataSlice';

export const CompleteProfileScreen = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch();

    const formData = useSelector(selectFormData);
    console.log(formData)
    // Local Use State
    const [localFormData, setLocalFormData] = useState({
        name: '',
        email: '',
        relation: '',
        age: '',
        dob: '',
        bloodGroup: '',
        height: '',
        weight: '',
        mobileNumber: '',
        gender: '',
        occupation: '',
        address1: '',
        address2: '',
        city: '',
        pinCode: '',
        district: '',
        state: '',
        country: '',
        photo: ''
    });

    const handleFormDataChange = (fieldName, value) => {
        const updatedLocalFormData = { ...localFormData, [fieldName]: value };
        setLocalFormData(updatedLocalFormData);
        dispatch(setFormData(updatedLocalFormData));
    };
    const handleLocation = () => {
    }
    const goBack = () => {
        navigation.navigate('OtpScreen');
    }
    const handleContinue = () => {
        dispatch(addUserProfile(localFormData));
        navigation.navigate('UserProfileScreen');
    }
    // Render UI .........................
    // Render Body
    const renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={commonImagePath.backgroundCurve} resizeMode="cover" style={styles.backgroundCurve} />
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                        <Icon name="angle-left" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>{strings.addNew}</Text>
                    <Spacer width={widthPercentageToDP('3%')} />
                    <Image source={commonImagePath.call} />
                </View>
                <Spacer height={heightPercentageToDP('15%')} />
                <View style={styles.contentView}>
                    <CustomInput
                        label={strings.name1}
                        placeholder={placeholders.enterName}
                        value={localFormData.name}
                        onChangeText={(text) => handleFormDataChange('name', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.email1}
                        placeholder={placeholders.enterMail1}
                        value={localFormData.email}
                        onChangeText={(text) => handleFormDataChange('email', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.relation}
                        placeholder={placeholders.enterRelation}
                        value={localFormData.relation}
                        onChangeText={(text) => handleFormDataChange('relation', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.age}
                        placeholder={placeholders.enterAge}
                        value={localFormData.age}
                        onChangeText={(text) => handleFormDataChange('age', text)}
                        keyboardType='numeric'
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.dob}
                        placeholder={placeholders.enterDob}
                        value={localFormData.dob}
                        onChangeText={(text) => handleFormDataChange('dob', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.bloodGroup}
                        placeholder={placeholders.enterBloodGrp}
                        value={localFormData.bloodGroup}
                        onChangeText={(text) => handleFormDataChange('bloodGroup', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.weight}
                        placeholder={placeholders.enterWeight}
                        value={localFormData.weight}
                        onChangeText={(text) => handleFormDataChange('weight', text)}
                        keyboardType='numeric'
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.text}>{strings.gender}</Text>
                    <Spacer height={heightPercentageToDP('1.5%')} />

                    <GenderPicker />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.occupation}
                        placeholder={placeholders.enterOccupation}
                        value={localFormData.occupation}
                        onChangeText={(text) => handleFormDataChange('occupation', text)}
                    />
                    <View style={{ width: widthPercentageToDP('48%'), alignSelf: 'flex-end' }}>
                        <CustomButton
                            primaryButton
                            label={strings.useMyCurLoc}
                            handlePress={handleLocation}
                        />
                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.address1}
                        placeholder={placeholders.enterAddress}
                        value={localFormData.address1}
                        onChangeText={(text) => handleFormDataChange('address1', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.address2}
                        placeholder={placeholders.enterAddress}
                        value={localFormData.address2}
                        onChangeText={(text) => handleFormDataChange('address2', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.city}
                        placeholder={placeholders.enterCity}
                        value={localFormData.city}
                        onChangeText={(text) => handleFormDataChange('city', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.pinCode}
                        placeholder={placeholders.enterPin}
                        value={localFormData.pinCode}
                        onChangeText={(text) => handleFormDataChange('pinCode', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.dist}
                        placeholder={placeholders.enterDistrict}
                        value={localFormData.district}
                        onChangeText={(text) => handleFormDataChange('district', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.state}
                        placeholder={placeholders.enterState}
                        value={localFormData.state}
                        onChangeText={(text) => handleFormDataChange('state', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <CustomInput
                        label={strings.country}
                        placeholder={placeholders.enterCountry}
                        value={localFormData.country}
                        onChangeText={(text) => handleFormDataChange('country', text)}
                    />
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.text}>{strings.latestPhoto}</Text>
                    <Spacer height={heightPercentageToDP('1.5%')} />
                    <View style={{ width: widthPercentageToDP('35%'), alignSelf: 'flex-start' }}>
                        <CustomButton
                            logInButton
                            label={strings.upload}
                            handlePress={handleLocation}
                        />
                    </View>
                </View>
            </SafeAreaView>
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
                data={['USERPROFILE']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
            // ListHeaderComponent={renderHeader()}
            />
            {renderFooter()}
        </SafeAreaView>
    );

};
