import React, {useEffect} from 'react';
import {Text, View, FlatList, Keyboard} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setItems} from '../../../redux/features/ItemSlice';
import ItemInput from '../../../components/ItemInput';
import ItemContainer from '../../../components/ItemContainer';
import {styles} from './styles';

const ItemScreen = () => {
  const items = useSelector(state => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      const savedItems = await AsyncStorage.getItem('items');
      console.log('savedItems', savedItems);
      if (savedItems) {
        dispatch(setItems(JSON.parse(savedItems)));
      }
    } catch (error) {
      console.error('Error loading items from AsyncStorage:', error);
    }
  };

  const handleAddItem = item => {
    if (!item.trim()) return;
    const newItems = [...items, item];
    console.log('newItems', newItems);

    dispatch(setItems(newItems));
    saveTasksToAsyncStorage(newItems);
    Keyboard.dismiss();
  };

  const handleEditItem = (index, editedItem) => {
    const updatedItems = [...items];
    updatedItems[index] = editedItem;
    dispatch(setItems(updatedItems));
    saveTasksToAsyncStorage(updatedItems);
  };

  const handleDeleteItem = deleteIndex => {
    const newItems = tasks.filter((_, index) => index !== deleteIndex);
    dispatch(setItems(newItems));
    saveTasksToAsyncStorage(newItems);
  };

  const saveTasksToAsyncStorage = async updatedItems => {
    try {
      await AsyncStorage.setItem('items', JSON.stringify(updatedItems));
    } catch (error) {
      console.error('Error saving items to AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODAY'S ITEM LIST</Text>
      <FlatList
        data={items}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.taskContainer}>
            <ItemContainer
              index={index + 1}
              task={item}
              deleteTask={() => handleDeleteItem(index)}
              editTask={editedItem => handleEditItem(index, editedItem)}
            />
          </View>
        )}
      />
      <ItemInput addTask={handleAddItem} />
    </View>
  );
};

export default ItemScreen;
