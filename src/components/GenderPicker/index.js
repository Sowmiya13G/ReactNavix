import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import theme from '../../constants/theme';
import Spacer from '../Spacer';
const GenderPicker = ({onOptionPress}) => {

  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['male', 'female', 'others'];

  const handleOptionPressInternal = option => {
    setSelectedOption(option);
    onOptionPress && onOptionPress(option);
  };

  const renderOption = (option, label) => (
    <TouchableOpacity onPress={() => handleOptionPressInternal(option)}>
      <View
        style={{
          backgroundColor:
            selectedOption === option
              ? theme.backgroundColor.fillingBlue
              : theme.backgroundColor.white,
          borderWidth: 2,
          borderColor:
            selectedOption === option
              ? theme.backgroundColor.bgBlue
              : theme.fontColors.inkLight,
          borderRadius: 5,
          padding: 8,
          margin: 8,
          alignItems: 'center',
          width: widthPercentageToDP('22%'),
          flexDirection: 'row'
        }}>
          <Icon
          name={option === 'male' ? 'mars' : option === 'female' ? 'venus' : 'transgender'}
          size={18}
          color={
            selectedOption === option
              ? theme.backgroundColor.white
              : theme.fontColors.inkLight
          }
        />
        <Spacer width={widthPercentageToDP('1%')}/>
        <Text
          style={{
            color:
              selectedOption === option
                ? theme.backgroundColor.bgBlue
                : theme.fontColors.inkLight,
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