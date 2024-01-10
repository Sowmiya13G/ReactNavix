import React, {useState} from 'react';
import {View, Platform} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {heightPercentageToDP, widthPercentageToDP} from 'react-native-responsive-screen';

const DropdownPicker = ({
  options = [],
  selectedUnit,
  setSelectedUnit = () => {},
}) => {
  const [open, setOpen] = useState(false);
    const dropdownItems = options.map((option, index) => ({
      label: option,
      value: option,
      key: index.toString(),
    }));

  return (
    <View>
      <DropDownPicker
        open={open}
        value={selectedUnit}
        items={dropdownItems}
        setOpen={setOpen}
        style={{
          backgroundColor: 'white',
          borderColor: 'white',
          width: widthPercentageToDP('25%'),
          height: heightPercentageToDP('4%'),
          ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.2,
              shadowRadius: 2,
            },
            android: {
              elevation: 4,
            },
          }),
        }}
        textStyle={{color: '#000', fontSize: 12}}
        dropDownContainerStyle={{
          backgroundColor: '#fff',
          borderWidth: 0,
          width: widthPercentageToDP('25%'),
        }}
        onSelectItem={item => setSelectedUnit(item.value)}
      />
    </View>
  );
};

export default DropdownPicker;
