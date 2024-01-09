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
import { useDispatch, useSelector } from 'react-redux';
import {  selectFormData} from '../../../redux/features/FormDataSlice';

export const UserProfileScreen = () => {
  // Selectors
  const formData = useSelector(selectFormData);
  console.log('formData', formData)
  const userPhotos = formData.profiles.map((profile) => profile.photo);
  console.log('userPhoto', userPhotos)
  // Variables
  const navigation = useNavigation()
  const completedProgress = formData.progress;

  // Fuctions
  const goBack = () => {
    navigation.navigate('OtpScreen');
  }
  const goToProfile = () => {
    navigation.navigate('DashboardTab');
  }

  // REnder UI............
const renderUserProfile = ({ item }) => {
  const imageUri = item.photo && item.photo.trim() !== '' ? item.photo : null;

  return (
      <View key={item.name} style={styles.contentView}>
      {imageUri ? (
        <Image source={{ uri: imageUri }} style={styles.userPhoto} />
      ) : (
        <View style={styles.userPhotoPlaceholder}>
        <Text style={styles.userAge}>No Photo Available</Text>
        </View>
      )}
      <View style={{flexDirection: 'column'}} >
          <Text style={styles.userName}>{strings.name}:{item.name}</Text>
          <Spacer height={heightPercentageToDP('1%')}/>
          <Text style={styles.userRelation}>{strings.relation}:{item.relation}</Text>
          <Spacer height={heightPercentageToDP('1%')}/>
          <Text style={styles.userAge}>{strings.age}: {item.age}</Text>
          <Spacer height={heightPercentageToDP('2%')}/>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: widthPercentageToDP('20%')}}>
            <Icon name="pencil" size={20} color={theme.fontColors.black} style={styles.backIcon} />
            <Icon name="trash" size={20} color={theme.fontColors.black} style={styles.backIcon} />
            <Icon name="eye" size={20} color={theme.fontColors.black} style={styles.backIcon} />
          </View>
      </View>
          <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{`${completedProgress.toFixed(2)}%`}</Text>
          <Progress.Circle
              progress={completedProgress / 100}
              size={widthPercentageToDP('15%')}
              thickness={5}
              borderWidth={0}
              color={theme.backgroundColor.blueTheme}
              unfilledColor={theme.backgroundColor.gray}
          />
          </View>
      </View>
  );
};

const renderBody = () => {
  return (
      <SafeAreaView style={styles.container}>
          <FlatList
              data={formData.profiles} 
              renderItem={renderUserProfile}
              keyExtractor={(item, index) => index.toString()}
              ListHeaderComponent={renderHeader()}
          />
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
  </SafeAreaView>
);
};
