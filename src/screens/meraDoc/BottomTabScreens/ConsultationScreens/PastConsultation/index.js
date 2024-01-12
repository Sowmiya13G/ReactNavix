import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity
} from 'react-native';

// Packages
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

// Constants
import theme from '../../../../../constants/theme';
import commonImagePath from '../../../../../constants/images';
import { strings } from '../../../../../constants/strings';

import Spacer from '../../../../../components/Spacer';
// Styles
import { styles } from './styles';

const PastConsultaionScreen = ({ route, navigation }) => {
  const { selectedTab } = route.params || { selectedTab: 'Upcoming' };
  const [selectedItem, setSelectedItem] = useState(selectedTab);
  const [upComing, setUpComing] = useState(selectedTab === 'Upcoming');
  const [past, setPast] = useState(selectedTab === 'Past');
  const goBack = () => {
    navigation.navigate('HomeTab');

  }
  // Render UI .........................
  // Render Body
  const renderBody = () => {
    return (

      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
        {/* <ImageBackground source={commonImagePath.backgroundCurve} resizeMode="cover" style={styles.backgroundCurve} /> */}
        <View style={{flexDirection: 'row', width: widthPercentageToDP('88%'), padding: '1%', margin: '5%', backgroundColor: 'white', borderRadius: widthPercentageToDP('5%')}}>

        <TouchableOpacity
              style={[
                styles.tab,
                selectedItem === 'Upcoming' ? styles.selectedTab : null,
              ]}
              onPress={() => {
                setSelectedItem('Upcoming');
              setUpComing(true);
              setPast(false);
              }}
            >
                           <Text style={[styles.tabText,{color: upComing?theme.fontColors.white: theme.fontColors.black} ]}>Upcoming</Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                selectedItem === 'Past' ? styles.selectedTab : null,
              ]}
              onPress={() => {
              setSelectedItem('Past');
              setUpComing(false);
              setPast(true);
            }}
          >
              <Text style={[styles.tabText,{color: past?theme.fontColors.white: theme.fontColors.black} ]}>Past</Text>
            </TouchableOpacity>
        </View>
        {upComing && (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            
            <View style={styles.content}>
              <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'center' }}>
                <Image source={commonImagePath.doctorImg} style={styles.image} />
                <Spacer height={heightPercentageToDP('2%')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Icon name="user" size={20} color='#EB996E' />
                  <Spacer width={widthPercentageToDP('3%')} />
                  <Text style={styles.singleUser}>{strings.userType}</Text>
                </View>
              </View>
              <Spacer width={widthPercentageToDP('5%')} />
              <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                <Text style={styles.title}>{strings.drName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drId}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.patientName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drRole}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.dateAndTime}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
              </View>
            </View>
            <Spacer height={heightPercentageToDP('3%')} />

            <View style={styles.content}>
              <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'center' }}>
                <Image source={commonImagePath.doctorImg} style={styles.image} />
                <Spacer height={heightPercentageToDP('2%')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Icon name="user" size={20} color='#EB996E' />
                  <Spacer width={widthPercentageToDP('3%')} />
                  <Text style={styles.singleUser}>{strings.userType}</Text>
                </View>
              </View>
              <Spacer width={widthPercentageToDP('5%')} />
              <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                <Text style={styles.title}>{strings.drName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drId}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.patientName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drRole}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.dateAndTime}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
              </View>
            </View>
            <Spacer height={heightPercentageToDP('3%')} />

            <View style={styles.content}>
              <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'center' }}>
                <Image source={commonImagePath.doctorImg} style={styles.image} />
                <Spacer height={heightPercentageToDP('2%')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Icon name="user" size={20} color='#EB996E' />
                  <Spacer width={widthPercentageToDP('3%')} />
                  <Text style={styles.singleUser}>{strings.userType}</Text>
                </View>
              </View>
              <Spacer width={widthPercentageToDP('5%')} />
              <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                <Text style={styles.title}>{strings.drName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drId}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.patientName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drRole}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.dateAndTime}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
              </View>
            </View>
          </KeyboardAvoidingView>
        )
        }
        {past &&
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

          >
            <View style={styles.content}>
              <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'center' }}>
                <Image source={commonImagePath.doctorImg} style={styles.image} />
                <Spacer height={heightPercentageToDP('2%')} />
                <Text style={styles.completed}>{strings.completed}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Icon name="user" size={20} color='#EB996E' />
                  <Spacer width={widthPercentageToDP('3%')} />
                  <Text style={styles.singleUser}>{strings.userType}</Text>
                </View>
              </View>
              <Spacer width={widthPercentageToDP('5%')} />
              <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                <Text style={styles.title}>{strings.drName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drId}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.patientName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drRole}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.dateAndTime}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
              </View>
            </View>
            <Spacer height={heightPercentageToDP('3%')} />

            <View style={styles.content}>
              <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'center' }}>
                <Image source={commonImagePath.doctorImg} style={styles.image} />
                <Spacer height={heightPercentageToDP('2%')} />
                <Text style={styles.completed}>{strings.attended}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Icon name="user" size={20} color='#EB996E' />
                  <Spacer width={widthPercentageToDP('3%')} />
                  <Text style={styles.singleUser}>{strings.userType}</Text>
                </View>
              </View>
              <Spacer width={widthPercentageToDP('5%')} />
              <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                <Text style={styles.title}>{strings.drName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drId}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.patientName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drRole}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.dateAndTime}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
              </View>
            </View>
            <Spacer height={heightPercentageToDP('3%')} />

            <View style={styles.content}>
              <View style={{ flexDirection: 'column', padding: 5, justifyContent: 'center' }}>
                <Image source={commonImagePath.doctorImg} style={styles.image} />
                <Spacer height={heightPercentageToDP('2%')} />
                <Text style={styles.completed}>{strings.attended}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Icon name="user" size={20} color='#EB996E' />
                  <Spacer width={widthPercentageToDP('3%')} />
                  <Text style={styles.singleUser}>{strings.userType}</Text>
                </View>
              </View>
              <Spacer width={widthPercentageToDP('5%')} />
              <View style={{ flexDirection: 'column', left: '5%', width: '80%' }}>
                <Text style={styles.title}>{strings.drName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drId}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.patientName}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.drRole}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
                <Text style={styles.data}>{strings.dateAndTime}</Text>
                <Spacer height={heightPercentageToDP('1%')} />
              </View>
            </View>
          </KeyboardAvoidingView>
        }
      </SafeAreaView>

    );

  };

  // Render Header
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Spacer height={heightPercentageToDP('8%')} />
        {upComing &&
          <>
            <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
              <Icon name="angle-left" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.heading}>{strings.upComingConsultaion}</Text>
            <Icon name="volume-control-phone" size={25} color={theme.fontColors.white} style={styles.callIcon} />
            <Icon name="bell" size={25} color={theme.fontColors.white} style={styles.bellIcon} />
          </>
        }
        {past &&
          <>
            <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
              <Icon name="angle-left" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.heading}>{strings.pastConsultation}</Text>
            <Spacer width={widthPercentageToDP('3%')} />
            <Icon name="volume-control-phone" size={25} color={theme.fontColors.white} style={styles.callIcon} />
            <Icon name="bell" size={25} color={theme.fontColors.white} style={styles.bellIcon} />
          </>

        }
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />

      <FlatList
        data={['CONSULTATION']}
        renderItem={renderBody}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader()}
      />
    </SafeAreaView>
  );

};


export default PastConsultaionScreen;
