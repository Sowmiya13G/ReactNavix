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
import Spacer from '../../../../components/Spacer';

// Constants
import theme from '../../../../constants/theme';
import { strings } from '../../../../constants/strings';
import commonImagePath from '../../../../constants/images';

// Styles
import { styles } from './styles';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData } from '../../../../redux/features/FormDataSlice';

export const ProfileDetailsScreen = ({ route }) => {
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
    const renderBody = () => {
        <View style={styles.contentView}>
            <Text style={styles.heading}>Name: {profileData.name}</Text>
            <Text style={styles.heading}>Email: {profileData.email}</Text>
        </View>
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
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
            <FlatList
                data={formData.profiles}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );
};
