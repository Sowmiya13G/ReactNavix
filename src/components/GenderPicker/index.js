/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import theme from '../../constants/theme';
const GenderPicker = ({onOptionPress}) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['male', 'female', 'others'];

  const handleOptionPressInternal = option => {
    setSelectedOption(option);
    onOptionPress(option);
  };

  const renderOption = (option, label) => (
    <TouchableOpacity onPress={() => handleOptionPressInternal(option)}>
      <View
        style={{
          backgroundColor:
            selectedOption === option
              ? theme.backgroundColor.blueTheme
              : theme.backgroundColor.white,
          borderWidth: 2,
          borderColor:
            selectedOption === option
              ? theme.backgroundColor.blueTheme
              : theme.backgroundColor.borderGray,
          borderRadius: 5,
          padding: 10,
          margin: 10,
          alignItems: 'center',
          width: widthPercentageToDP('22%'),
        }}>
        <Text
          style={{
            color:
              selectedOption === option
                ? theme.backgroundColor.white
                : theme.fontColors.gray,
            fontWeight: 'bold',
          }}>
          {option}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%'
      }}>
      {options.map(option => renderOption(option))}
    </View>
  );
};

export default GenderPicker;