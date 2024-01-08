/* eslint-disable prettier/prettier */
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
import Spacer from '../../../components/Spacer';

// Constants
import theme from '../../../constants/theme';
import { strings } from '../../../constants/strings';
import commonImagePath from '../../../constants/images';

// Styles
import { styles } from './styles';

// redux
import { useSelector } from 'react-redux';
import { selectFormData } from '../../../redux/features/FormDataSlice';

export const UserProfileScreen = () => {
    const navigation = useNavigation()
    const formData = useSelector(selectFormData);
    const userName = formData.name;
    const completedProgress = formData.progress;
    console.log('userName', userName, 'completedProgress', completedProgress)
    const goBack = () => {
        navigation.navigate('OtpScreen');
    }
    const goToProfile = () => {
        navigation.navigate('CompleteProfileScreen');
    }
    // Render UI .........................
    const renderUserProfile = (userProfile) => {
        return (
          <View key={userProfile.name} style={styles.contentView}>
            {/* Render user profile details */}
            <Text style={styles.userName}>{userProfile.name}</Text>
            <Text style={styles.userRelation}>{userProfile.relation}</Text>
            <Text style={styles.userAge}>{strings.age}: {userProfile.age}</Text>
          </View>
        );
      };
    // Render Body
    const renderBody = () => {
        return (
          <SafeAreaView style={styles.container}>
            <FlatList
              data={formData}
              renderItem={({ item }) => renderUserProfile(item)}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={renderHeader()}
            />
          </SafeAreaView>
        );
      };
    
    // const renderBody = () => {
    //     return (
    //         <SafeAreaView style={styles.container}>
    //             <View style={styles.contentView}>
    //                 {/* <Image source={{ uri: formData.photo }} style={styles.userPhoto} /> */}
    //                 <Text style={styles.userName}>{formData.name}</Text>
    //                 <Text style={styles.userRelation}>{formData.relation}</Text>
    //                 <Text style={styles.userAge}>{strings.age}: {formData.age}</Text>
    //             </View>
    //             <Progress.Circle
    //                 progress={formData.progress}
    //                 size={widthPercentageToDP('30%')}
    //                 thickness={5}
    //                 borderWidth={0}
    //                 color={theme.progressBarColor}
    //             />
    //         </SafeAreaView>
    //     );

    // };

    // Render Header
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Spacer height={heightPercentageToDP('8%')} />
                <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                    <Icon name="angle-left" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.heading}>{strings.familyTree}</Text>
                <Spacer width={widthPercentageToDP('5%')} />
                <TouchableOpacity onPress={() => goToProfile()}>
                    <Text style={styles.add}>{strings.add}</Text>
                </TouchableOpacity>
                <Spacer width={widthPercentageToDP('5%')} />
                <Image source={commonImagePath.call} />

            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
            {renderBody()}
{/* {}
            <FlatList
                data={['USERPROFILE']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            /> */}
        </SafeAreaView>
    );

};
