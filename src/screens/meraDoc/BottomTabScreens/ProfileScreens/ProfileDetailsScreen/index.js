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

// Packages
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Spacer from '../../../../../components/Spacer';

// Constants
import theme from '../../../../../constants/theme';
import { strings } from '../../../../../constants/strings';
import commonImagePath from '../../../../../constants/images';
import { Background } from '../../../../../components/Background/background';

// Styles
import { styles } from './styles';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData } from '../../../../../redux/features/FormDataSlice';

 const ProfileDetailsScreen = ({ route }) => {
    const profileData = route.params?.profileData || {};
    console.log('profileData', profileData)
    // Selectors
    const formData = useSelector(selectFormData);
    console.log('formData', formData)
    const userPhotos = formData.profiles.map((profile) => profile.photo);
    console.log('userPhoto', userPhotos)
    // Variables
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const completedProgress = formData.progress;

    // Fuctions
    const goBack = () => {
        navigation.navigate('UserTab');
    }

    // REnder UI............
    const renderBody = ({ item, index }) => {
        const imageUri = item.photo && item.photo.trim() !== '' ? item.photo : null;

        return (
            <>
                <View style={{ alignSelf: 'center' }}>
                    {imageUri ? (
                        <Image source={{ uri: imageUri }} style={styles.userPhoto} />
                    ) : (
                        <View style={styles.userPhotoPlaceholder}>
                        </View>
                    )}

                    <Text style={styles.userName}>{item.name}</Text>
                    <Spacer height={heightPercentageToDP('1%')} />
                    <Text style={styles.userNum}>{strings.age}: {item.mobileNumber}</Text>
                </View>
                <Spacer height={heightPercentageToDP('5%')} />

                <View key={item.name} style={styles.contentView}>

                    <View style={{ flexDirection: 'column' }} >
                        <Spacer height={heightPercentageToDP('1%')} />
                        <Text style={styles.userRelation}>{strings.relation}:{item.relation}</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <Text style={styles.userAge}>{strings.age}: {item.age}</Text>
                        <Spacer height={heightPercentageToDP('2%')} />

                    </View>

                </View>
                <View style={styles.progressContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.medicalHistory}>Medical history</Text>
                        <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                            <Icon name="angle-up" size={20} color={theme.fontColors.black} style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>
                    <Spacer height={heightPercentageToDP('3%')} />

                    <Progress.Bar
                        progress={completedProgress / 100}
                        size={widthPercentageToDP('15%')}
                        thickness={5}
                        borderWidth={0}
                        color={theme.backgroundColor.blueTheme}
                        unfilledColor={theme.backgroundColor.gray}
                    />
                    <Spacer height={heightPercentageToDP('1%')} />
                    <Text style={styles.progressText}>{`${completedProgress.toFixed(2)}%`} only completed</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.completeNow}>Completed now</Text>


                </View>
                <View style={styles.progressContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.medicalHistory}>Health Records</Text>
                        <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                            <Icon name="angle-right" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                        </TouchableOpacity>
                    </View>

                </View>
            </>

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
                <Spacer width={widthPercentageToDP('2%')} />
                <Text style={styles.heading}>{strings.myProfile}</Text>
                <Spacer width={widthPercentageToDP('38%')} />

                <Image source={commonImagePath.call} />

            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Background backgroundImageStyle={styles.backgroundCurve} />
            <FlatList
                data={formData.profiles}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );
};
export default ProfileDetailsScreen