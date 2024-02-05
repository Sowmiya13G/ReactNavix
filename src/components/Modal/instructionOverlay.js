// import React from 'react';
// import { View, Text, Modal, StyleSheet, Image,TouchableOpacity } from 'react-native';
// import theme from '../../constants/theme';
// import { widthPercentageToDP } from 'react-native-responsive-screen';
// import commonImagePath from '../../constants/images';

//   const InstructionOverlay = ({ isVisible, title, text, onNext, onClose, arrowDirection, targetMeasurements, indexValue, arrow }) => {
//     let arrowStyle = {};
//     if (targetMeasurements && typeof targetMeasurements === 'object') {
//       arrowStyle = {
//         bottom: arrowDirection === 'down' ? 'auto' : targetMeasurements.y + targetMeasurements.height + 20,
//         top: arrowDirection === 'up' ? 'auto' : targetMeasurements.y - 40,
//         left: targetMeasurements.x - 20,
//         right: arrowDirection === 'down' ? 'auto' : '20%',
//         width: 0,
//         height: 0,
//         borderLeftWidth: 15,
//         borderRightWidth: 15,
//         borderBottomWidth: arrowDirection === 'down' ? 0 : 15,
//         borderTopWidth: arrowDirection === 'up' ? 0 : 15,
//         borderLeftColor: 'transparent',
//         borderRightColor: 'transparent',
//         borderBottomColor: arrowDirection === 'down' ? 'transparent' : 'white',
//         borderTopColor: arrowDirection === 'up' ? 'transparent' : 'white',
//       };
//     }
  
//     return (
//       <Modal
//         visible={isVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={onClose}
//       >
//         <View style={[styles.container]}>
//           <View style={arrowStyle} />
//           <View style={[styles.content, indexValue === 0 ? styles.contentIndex1: indexValue === 1? styles.contentIndex2 : indexValue === 2 ? styles.contentIndex3 : styles.contentIndex4]}>
//             <Text style={styles.title}>{title}</Text>
//             <Text style={styles.text}>{text}</Text>
//             <View style={styles.button}>
//               <TouchableOpacity style={styles.skip} onPress={onClose}>
//                 <Text style={styles.skipTxt}>Skip</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.next} onPress={onNext}>
//                 <Text style={styles.nextText}>Next</Text>
//               </TouchableOpacity>
//             </View>
//               <Image resizeMode='cover' source={commonImagePath.arrow} style={arrow === 0? styles.arrowIndex0 : arrow === 1 ? styles.arrowIndex1 : arrow === 2 ? styles.arrowIndex2 : styles.arrowIndex3}/>
//           </View>
//         </View>
//       </Modal>
//     );
//   };
  
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     },
//     contentIndex1:{
//         position:'absolute',
//         bottom: '13%',
//         left:'2%',
//         width: '50%'
//     },
//     contentIndex2:{
//         position:'absolute',
//         bottom: '20%',
//         left:'28%',
//         width: '60%'
//     },

//     contentIndex3:{
//         position:'absolute',
//         bottom: '24%',
//         right:0,
//         width: '60%'
//     },
//     contentIndex4:{
//         position:'absolute',
//         top: '20%',
//         right:'1%',
//     },
//     content: {
//         padding: '5%',
//     },
//     title: {
//         fontSize: theme.fontSizes.mediumFontText,
//         color: theme.fontColors.white, 
//         fontWeight:'bold', 
//         marginBottom:'3%'
//     },
//     text: {
//         fontSize: theme.fontSizes.smallFontText,
//         color: theme.fontColors.white,
//         marginBottom:'3%',
//         fontWeight:'bold', 
//     },
//     button: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         marginTop: '3%', 
//         marginBottom: '5%'
//     },
//     skip: {
//         backgroundColor: theme.backgroundColor.white,
//         width: '40%',
//         alignItems: 'center',
//         borderRadius: widthPercentageToDP('3%')
//     },
//     skipTxt: {
//         fontSize: theme.fontSizes.smallFontText,
//         color: theme.fontColors.black,
//         padding: '4%',
//     },
//     next: {
//         backgroundColor: theme.backgroundColor.saddleBrown,
//         width: '40%',
//         alignItems: 'center',
//         justifyContent:'center',
//         borderRadius: widthPercentageToDP('3%'),
//     }, 
//     nextText:{
//         fontSize: theme.fontSizes.smallFontText,
//         color: theme.fontColors.white,
//         padding: '5%',
//     }, 
//     arrowIndex0:{
//         height: '50%', 
//         width: '50%', 
//         transform: [{ rotate: '100deg' }]
//     },
//     arrowIndex1:{
//         height: '80%', 
//         width: '50%', 
//         transform: [{ rotate: '80deg' }]
//     },
//     arrowIndex2:{
//         height: '80%', 
//         width: '50%', 
//         transform: [{ rotate: '80deg' }],
//       marginLeft: '45%'
//     },
//     arrowIndex3:{
//         height: '80%', 
//         width: '50%', 
//         transform: [{ rotate: '60deg' }],
//       marginLeft: '30%'
//     },
// })

// export default InstructionOverlay;

import React, { useState, useEffect } from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';
// packages
import AsyncStorage from '@react-native-async-storage/async-storage';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Constants
import theme from '../../constants/theme';
import commonImagePath from '../../constants/images';
// Components
import Spacer from '../Spacer';

const InstructionOverlay = ({
  isVisible,
  title,
  text,
  onNext,
  onClose,
  indexValue,
  // arrow,
  top = '0%',
  bottom = '0%',
  left = '0%',
  right = '0%',
  marginLeft = 'auto',
}) => {
  // Render UI............
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={[styles.container]}>
        <View style={[styles.content, styles.contentIndex(top, bottom, right, left)]}>
          {/* <Text style={styles.title}>{title}</Text> */}
          <Image source={commonImagePath.arrow} style={styles.arrowIndex(marginLeft,)} />
          <Text style={styles.text}>{text}</Text>
          <Spacer height={heightPercentageToDP('3%')} />
          <View style={styles.button}>
            <TouchableOpacity style={styles.skip} onPress={onClose}>
              <Text style={styles.skipTxt}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.next} onPress={onNext}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentIndex: (top, bottom, left, right) => [{
    position: 'absolute',
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    height: '30%'
  }],
  content: {
    padding: '5%',
  },
  title: {
    color: theme.fontColors.white,
    fontWeight: 'bold',
    marginBottom: '3%'
  },
  text: {
    color: theme.fontColors.white,
    marginBottom: '3%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  skip: {
    backgroundColor: theme.fontColors.white,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPercentageToDP('3%')
  },
  skipTxt: {
    color: theme.fontColors.blue,
    fontWeight: 'bold',
    padding: '4%',
    textAlign: 'center'
  },
  next: {
    backgroundColor: theme.fontColors.blue,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthPercentageToDP('3%'),
  },
  nextText: {
    textAlign: 'center',
    color: theme.fontColors.white,
    padding: '4%',
    fontWeight: 'bold',
  },
  arrowIndex: (marginLeft) => [{
    height: '30%',
    width: '30%',
    marginLeft: marginLeft,
    resizeMode: 'contain'
  }],
})

export default InstructionOverlay;