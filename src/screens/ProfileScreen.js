import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

export default function ProfileScreen() {
  const data = useSelector(state => state.store.value);
  console.log(data);
  // Define a function to render each item in the FlatList
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>Email: {item.email}</Text>
      <Text>Password: {item.password}</Text>
      <Text>Username: {item.username}</Text>
    </View>
  );
  return (
    <View>
      <Text>ProfileScreen</Text>
      <FlatList
        data={[data]}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>No data available</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  item: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
  },
  title: {
    color: 'black',
  },
});
