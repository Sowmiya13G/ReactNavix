import React, { useState, useEffect } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    Alert,
    TextInput
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

// Constants
import theme from '../../../../../constants/theme';
import { strings, placeholders } from '../../../../../constants/strings';
import commonImagePath from '../../../../../constants/images';
import { checkAndRequestPermissions } from '../../../../../utils/checkAndroidPermissions';

// Styles
import { styles } from './styles';

// components
import DropdownPicker from '../../../../../components/DropDownPicker';
import CustomInput from '../../../../../components/CustomInput/CustomInput';
import Spacer from '../../../../../components/Spacer';
import CustomButton from '../../../../../components/CustomButton/CustomButton';
import ChoicePicker from '../../../../../components/ChoicePicker';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData, addUserProfile, initialState, updateUserProfile } from '../../../../../redux/features/FormDataSlice';

const CompleteProfileScreen = ({ route }) => {
    // Selectors
    const formData = useSelector(selectFormData);
    console.log(formData);
    // Variables
    const navigation = useNavigation();
    const dispatch = useDispatch();

    // Local Use State
    const [localFormData, setLocalFormData] = useState({
        ...formData,
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
        photo: '',
        unit: 'cm',
    });
    const options = ['male', 'female', 'others'];

    //Fucntions
    const handleFormDataChange = (fieldName, value) => {
        const updatedLocalFormData = { ...localFormData, [fieldName]: value };
        setLocalFormData(updatedLocalFormData);
    };
    const handleLocation = () => {
    }
    const goBack = () => {
        navigation.navigate('OtpScreen');
    }

    const handleContinue = () => {
        if (route.params?.formData) {
            dispatch(updateUserProfile(localFormData));
        } else {
            dispatch(addUserProfile(localFormData));
        }
        navigation.navigate('UserTab');
        setLocalFormData(
            {
                ...formData,
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
                photo: '',
                unit: 'cm',
            }
        )
    }


    const handleGenderChange = (selectedOption) => {
        console.log('Selected gender:', selectedOption);
        setLocalFormData({ ...localFormData, gender: selectedOption });
    };
    const handleUploadPhoto = () => {
        checkAndRequestPermissions();
        const options = {
            title: 'Select Image',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        Alert.alert(
            'Choose Image Source',
            'Select an image source:',
            [
                {
                    text: 'Gallery',
                    onPress: () => {
                        launchImageLibrary(options, handleImageLibraryCallback);
                    },
                },
                {
                    text: 'Camera',
                    onPress: () => {
                        launchCamera(options, handleCameraCallback);
                    },
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
            ],
            { cancelable: true },
        );
    };

    const handleImageLibraryCallback = async response => {
        try {
            if (!response) {
                console.log('Response is undefined');
                return;
            }
            if (response.didCancel) {
                console.log('User canceled taking a photo');
                return;
            }
            if (response.error) {
                console.log('Camera Error: ', response.error);
                return;
            }
            const imageUri = response.uri || (response.assets?.[0]?.uri ?? null);
            if (!imageUri) {
                console.log('Image URI is undefined');
                return;
            }
            setLocalFormData({ ...localFormData, photo: imageUri })
        } catch (error) {
            console.error('Error handling camera callback:', error);
        }
    };

    const handleCameraCallback = async (response) => {
        try {
            if (!response) {
                console.log('Response is undefined');
                return;
            }
            if (response.didCancel) {
                console.log('User canceled taking a photo');
                return;
            }
            if (response.error) {
                console.log('Camera Error: ', response.error);
                return;
            }
            const imageUri = response.uri || (response.assets?.[0]?.uri ?? null);
            if (!imageUri) {
                console.log('Image URI is undefined');
                return;
            }
            setLocalFormData({ ...localFormData, photo: imageUri })
        } catch (error) {
            console.error('Error handling camera callback:', error);
        }
    };
    useEffect(() => {
        if (route.params?.formData) {
            setLocalFormData(route.params.formData);
        }
    }, [route.params?.formData]);
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
                    <View style={styles.view}>
                        <View style={styles.dropdownWrapper}>
                            <Text style={styles.text}>{strings.height}</Text>
                            <Spacer height={heightPercentageToDP('1.5%')} />

                            <DropdownPicker
                                options={['cm', 'inch']}
                                selectedUnit={localFormData.unit} // Use the correct property here
                                setSelectedUnit={(unit) => handleFormDataChange('unit', unit)}
                            />
                        </View>
                        <TextInput
                            style={[
                                styles.input,
                            ]}
                            value={localFormData.height}
                            placeholder={placeholders.enterHeight}
                            placeholderTextColor="#8692A6"
                            onChangeText={(text) => handleFormDataChange('height', text)}
                            keyboardType='numeric'
                        />
                    </View>

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

                    <ChoicePicker onOptionPress={handleGenderChange} options={options}/>
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
                            handlePress={handleUploadPhoto}
                        />
                    </View>
                    <View style={styles.button}>
                        <CustomButton
                            primaryButton
                            label={strings.continue}
                            handlePress={handleContinue}
                        />
                    </View>
                </View>
            </SafeAreaView>
        );

    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />

            <FlatList
                data={[{ key: '1', screen: 'USERPROFILE' }]}
                renderItem={({ item }) => renderBody(item.screen)}
                keyExtractor={(item) => item.key}
            />

        </SafeAreaView>
    );

};
export default CompleteProfileScreen