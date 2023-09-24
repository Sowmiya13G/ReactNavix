import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {globalStyles} from '../components/styles/styles';

export default function ProfileScreen() {
  const data = useSelector(state => state.value.value);
  console.log(data);
  // Define a function to render each item in the FlatList
  const renderItem = ({item}) => (
    <View>
      <Text style={styles.title}>Email: {item.email}</Text>
      <Text style={styles.title}>Password: {item.password}</Text>
      <Text style={styles.title}>Username: {item.username}</Text>
    </View>
  );
  return (
    <View style={(styles.container, globalStyles)}>
      <Text style={styles.head}>ProfileScreen</Text>
      <FlatList
        data={data}
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
    color: '#fff',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    margin: 10,
  },
});
