import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, editItem, deleteItem} from '../../../redux/features/ItemSlice';
import {styles} from './styles';
const ItemScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);
  const [newItem, setNewItem] = useState('');
  const [editedItem, setEditedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableIndex, setEditableIndex] = useState(-1);
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      if (editedItem) {
        dispatch(editItem({id: editedItem.id, text: newItem}));
        setEditedItem(null);
        setIsEditing(false);
      } else {
        dispatch(addItem(newItem));
      }
      setNewItem('');
    }
  };
  const handleSave = () => {
    setIsEditing(false);
    setEditableIndex(-1);
  };
  const handleEditItem = (id, text, index) => {
    setEditedItem({id, text});
    setNewItem(text);
    setEditableIndex(index);
  };
  const handleEdit = (id, text) => {
    dispatch(editItem({id, text}));
    setEditedItem(null);
    setIsEditing(false);
  };
  const handleDeleteItem = id => {
    dispatch(deleteItem(id));
  };

  const renderInput = () => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          value={newItem}
          onChangeText={text => setNewItem(text)}
          placeholder={'Enter item'}
          placeholderTextColor={'#fff'}
        />
        <TouchableOpacity onPress={handleAddItem}>
          <View style={styles.button}>
            <Icon name="arrow-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  };
  const renderBody = ({index, item}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.indexContainer}>
          <Text style={styles.index}>{index + 1}</Text>
        </View>
        <View style={styles.itemView}>
          <TextInput
            value={item.text}
            onChangeText={text => handleEdit(item.id, text)}
            style={[
              styles.taskContainer,
              {color: editableIndex === index ? '#000' : '#FFF'},
            ]}
            editable={editableIndex === index}
          />
          <View style={styles.buttonsContainer}>
            {editableIndex === index ? (
              <TouchableOpacity onPress={() => handleSave()}>
                <Icon name="save" size={20} color="#000" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => handleEditItem(item.id, item.text, index)}>
                <Icon name="edit" size={20} color="#000" />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => handleDeleteItem(item.id)}
              style={styles.deleteButton}>
              <Icon name="trash-o" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODAY'S ITEM LIST</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderBody}
      />
      {renderInput()}
    </View>
  );
};

export default ItemScreen;
