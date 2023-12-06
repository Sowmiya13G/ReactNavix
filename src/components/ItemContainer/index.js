import React, {useState} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {deleteItem, editItem} from '../../redux/features/ItemSlice';

const ItemContainer = ({item, index}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (editedItem !== item) {
      dispatch(editItem({index, editedItem}));
      console.log('Edited Item:', editedItem);
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.indexContainer}>
        <Text style={styles.index}>{index}</Text>
      </View>
      <View style={styles.taskContainer}>
        {isEditing ? (
          <TextInput
            value={editedItem}
            onChangeText={text => setEditedItem(text)}
            onBlur={handleSave}
            autoFocus
          />
        ) : (
          <Text style={styles.task}>{item}</Text>
        )}
        <View style={styles.buttonsContainer}>
          {isEditing ? (
            <TouchableOpacity onPress={handleSave}>
              <Icon name="save" size={20} color="#000" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleEdit}>
              <Icon name="edit" size={20} color="#000" />
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={handleDelete} style={styles.button}>
            <Icon name="trash-o" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemContainer;
