import {Text, View, FlatList, SectionList, Image} from 'react-native';
import React from 'react';
import { styles } from './styles';
import commonImagePath from '../../../constants/images';

export default function PriceScreen() {
   const galleryData = [
    {
      title: 'Today',
      data: [
        { image: commonImagePath.gallery1 },
        { image: commonImagePath.gallery2 },
        { image: commonImagePath.gallery3 },
      ]
    },
    {
      title: 'Nov 18',
      data: [
        { image: commonImagePath.sitting },
        { image: commonImagePath.birthDay },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.dogImage },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.pawImage },
        { image: commonImagePath.sitting },
        { image: commonImagePath.birthDay },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.dogImage },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.pawImage },
      ]
    },
    {
      title: 'Nov 18',
      data: [
        { image: commonImagePath.sitting },
        { image: commonImagePath.birthDay },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.dogImage },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.pawImage },
        { image: commonImagePath.sitting },
        { image: commonImagePath.birthDay },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.dogImage },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.pawImage },
      ]
    },
    {
      title: 'Nov 18',
      data: [
        { image: commonImagePath.sitting },
        { image: commonImagePath.birthDay },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.dogImage },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.pawImage },
        { image: commonImagePath.sitting },
        { image: commonImagePath.birthDay },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.dogImage },
        { image: commonImagePath.sittingWith },
        { image: commonImagePath.pawImage },
      ]
    },
  ];
  const getKeyExtractorTitle = (item) => {
    return item.title;
};
  return (
    <View style={styles.container}>
        <SectionList
          sections={galleryData}
          keyExtractor={(item, index) => `${index}:${item.image}`} 
          renderItem={({ item }) => (
            console.log('item', item)
          )}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.listHeader}>{section.title}</Text>
              <FlatList
                data={section.data}
                keyExtractor={(item, index) => `${index}:${item.image}`}
                renderItem={({ item, index }) => (
                  <View style={styles.listItem}>
                    <Image source={item.image} style={styles.listImage} />
                  </View>
                )}
                numColumns={4}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
  );


}
