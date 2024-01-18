import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Alert
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

//Components
import SwitchTab from '../../../../../components/SwitchTab';
import Spacer from '../../../../../components/Spacer';

// Constants
import theme from '../../../../../constants/theme';
import { strings } from '../../../../../constants/strings';
import commonImagePath from '../../../../../constants/images';

// Styles
import { styles } from './styles';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectFormData, deleteUserProfile, addUserProfile , initializeFamilyTree} from '../../../../../redux/features/FormDataSlice';

const UserProfileScreen = ({ route }) => {
  // Selectors
  const formData = useSelector(selectFormData);
  console.log('formData', formData)
  const userPhotos = formData.profiles.map((profile) => profile.photo);
  console.log('userPhoto', userPhotos)
  // Variables
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const completedProgress = formData.progress;
  console.log('Family Tree Data///////:', formData.familyTree);

  const { selectedTab } = route.params || { selectedTab: 'familyTree' };
  const [selectedItem, setSelectedItem] = useState(selectedTab);


const addFamilyMember = () => {
  Alert.prompt(
    'Add Family Member',
    'Enter the new member\'s name, relationship, and parent ID (if applicable):',
    (newMemberData) => {
      if (newMemberData) {
        const [newMemberName, newMemberRelationship, newMemberParentId] = newMemberData.split(',');
        const newMember = {
          id: Date.now(),
          name: newMemberName,
          relation: newMemberRelationship,
          children: [],
          parentId: newMemberParentId ? parseInt(newMemberParentId, 10) : null,
        };

        const updatedFamilyTree = [...formData.familyTree];
        const parentNode = findNodeById(updatedFamilyTree[0], newMember.parentId);
        const rootNode = updatedFamilyTree[0];

        if (!rootNode.children) {
          rootNode.children = [];
        }

        rootNode.children.push(newMember);

        dispatch(addUserProfile(newMember, updatedFamilyTree));
      }
    }
  );
};

  const findNodeById = (node, id) => {
    if (node.id === id) {
      return node;
    }
    for (const child of node.children) {
      const foundNode = findNodeById(child, id);
      if (foundNode) {
        return foundNode;
      }
    }
    return null;
  };

  // Fuctions
  const goBack = () => {
    navigation.navigate('OtpScreen');
  }
  const goToProfile = () => {
    addFamilyMember();
    navigation.navigate('CompleteProfileScreen');
  }
  const navigateToEditProfile = (profileData) => {
    navigation.navigate('CompleteProfileScreen', { formData: profileData });
  };
  const handleDelete = (index) => {
    dispatch(deleteUserProfile(index));
  };
  const navigateToDetailsProfile = (profileData) => {
    navigation.navigate('ProfileDetailsScreen', { formData: profileData });
  };
  const goToSettings = () => {
    navigation.navigate('SettingsScreen');

  }

  // Render UI............
  const renderUserProfile = ({ item, index }) => {
    const imageUri = item.photo && item.photo.trim() !== '' ? item.photo : null;
    return (
      <>
        {selectedItem === 'familyTree' && (
          <>
            <FamilyTreeNode person={formData.familyTree[0]} key={index}/>
          </>
        )}
        {selectedItem === 'familyDetails' && (
          <View key={item.name} style={styles.contentView}>
            {imageUri ? (
              <Image source={{ uri: imageUri }} style={styles.userPhoto} />
            ) : (
              <View style={styles.userPhotoPlaceholder}>
              </View>
            )}
            <View style={{ flexDirection: 'column' }} >
              <Text style={styles.userName}>{strings.name}:{item.name}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
              <Text style={styles.userRelation}>{strings.relation}:{item.relation}</Text>
              <Spacer height={heightPercentageToDP('1%')} />
              <Text style={styles.userAge}>{strings.age}: {item.age}</Text>
              <Spacer height={heightPercentageToDP('2%')} />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: widthPercentageToDP('20%') }}>
                <Icon name="pencil" size={20} color={theme.fontColors.black} style={styles.backIcon} onPress={() => navigateToEditProfile(item)} />
                <Icon name="trash" size={20} color={theme.fontColors.black} style={styles.backIcon} onPress={() => handleDelete(index)} />
                <Icon name="eye" size={20} color={theme.fontColors.black} style={styles.backIcon} onPress={() => navigateToDetailsProfile(item)} />
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
        )}
      </>
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
        <TouchableOpacity onPress={goToSettings}>
          <Image source={commonImagePath.call} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
      {renderHeader()}
      <SwitchTab
        selectedTab={selectedItem}
        onSelectTab={setSelectedItem}
        firstTabLabel="familyTree"
        secondTabLabel="familyDetails"
        initialSelectedTab="familyTree"
      />
      {selectedItem === "familyTree" ?
        (<FlatList
          data={[{ key: '1', screen: 'USERPROFILE' }]}
          renderItem={renderUserProfile}
          keyExtractor={(item, index) => index.toString()}
        />
        ) : (
          <FlatList
            data={formData.profiles}
            renderItem={renderUserProfile}
            keyExtractor={(item, index) => index.toString()}
          />
        )
      }
    </>
  );
};
export default UserProfileScreen

const FamilyTreeNode = ({ person }) => {
  const imageUri = person.photo && person.photo.trim() !== '' ? person.photo : null;

  if (!person || !person.children || !Array.isArray(person.children)) {
    return (
      <View />
    );
  }
  return (
    <View style={[styles.nodeContainer, ]}>
      <View style={[styles.rectangle,{ backgroundColor: person.gender === 'female' ? 'lightpink' : 'lightblue' }]}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.userPhoto} />
        ) : (
          <View style={styles.userPhotoPlaceholder}></View>
        )}
        <Text style={styles.nodeTitle}>{person.name}</Text>
        <Text style={styles.nodeTitle}>{person.age}</Text>
      </View>
      <View style={styles.connectionLine} />
      <View style={styles.childrenContainer}>
        {person.children.map((child, index) => (
          <View key={index} style={styles.relationshipContainer}>
            <View style={styles.connectionLine}></View>
            <FamilyTreeNode person={child} />
            {(index !== person.children.length - 1) && <View style={styles.connectionLine}></View>}
          </View>
        ))}
      </View>
    </View>
  );
};

