
import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { styles } from './styles';
import theme from '../../constants/theme';

const SwitchTab = ({
  onSelectTab,
  firstTabLabel,
  secondTabLabel,
  initialSelectedTab
}) => {
  const [selected, setSelected] = useState(initialSelectedTab || firstTabLabel);
  return (
    <View style={{ flexDirection: 'row', width: widthPercentageToDP('88%'), padding: '1%', margin: '5%', backgroundColor: 'white', borderRadius: widthPercentageToDP('5%') }}>
      <TouchableOpacity
        style={[
          styles.tab,
          selected === firstTabLabel ? styles.selectedTab : null,
        ]}
        onPress={() => {
          setSelected(firstTabLabel);
          onSelectTab(firstTabLabel);
        }}
      >
        <Text style={[styles.tabText, { color: selected === firstTabLabel ? theme.fontColors.white : theme.fontColors.black }]}>{firstTabLabel}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tab,
          selected === secondTabLabel ? styles.selectedTab : null,
        ]}
        onPress={() => {
          setSelected(secondTabLabel);
          onSelectTab(secondTabLabel);
        }}
      >
        <Text style={[styles.tabText, { color: selected === secondTabLabel ? theme.fontColors.white : theme.fontColors.black }]}>{secondTabLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchTab;
