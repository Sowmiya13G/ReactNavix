import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

// Packages
import Icon from 'react-native-vector-icons/FontAwesome';
import Sound from 'react-native-sound';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { addItem, editItem, deleteItem } from '../../../redux/features/ItemSlice';

// Styles
import { styles } from './styles';

// Constants
import theme from '../../../constants/theme';
import commonSoundPath from '../../../constants/sounds';

const ItemScreen = () => {

  // Redux 
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  // Use State
  const [newItem, setNewItem] = useState('');
  const [editedItem, setEditedItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableIndex, setEditableIndex] = useState(-1);
  const [sound, setSound] = useState();
  console.log('sound', sound)

  // functions
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      if (editedItem) {
        dispatch(editItem({ id: editedItem.id, text: newItem }));
        setEditedItem(null);
        setIsEditing(false);
      } else {
        console.log('added')
        dispatch(addItem(newItem));
        if (sound) {
          sound.play((success) => {
            if (success) {
              console.log('Sound played successfully!');
            } else {
              console.log('Sound playback failed!');
            }
          });
        }
      }
      setNewItem('');
    }
  };
  const handleSave = () => {
    setIsEditing(false);
    setEditableIndex(-1);
  };
  const handleEditItem = (id, text, index) => {
    setEditedItem({ id, text });
    setNewItem(text);
    setEditableIndex(index);
  };
  const handleEdit = (id, text) => {
    dispatch(editItem({ id, text }));
    setEditedItem(null);
    setIsEditing(false);
  };
  const handleDeleteItem = id => {
    dispatch(deleteItem(id));
  };

// UseEffect
useEffect(() => {
  const loadSound = async () => {
    try {
      const notificationSound = new Sound(commonSoundPath.notification, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Error loading sound:', error);
          return;
        }
        console.log('Sound loaded successfully!');
        setSound(notificationSound);
      });
    } catch (error) {
      console.error('Error loading sound:', error);
    }
  };

  loadSound();

  return () => {
    if (sound) {
      sound.release();
    }
  };
}, []);



  // render UI ............
  // render Input 
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

  // render Body 
  const renderBody = ({ index, item }) => {
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
              { color: editableIndex === index ? theme.fontColors.black : theme.fontColors.white },
            ]}
            editable={editableIndex === index}
          />
          <View style={styles.buttonsContainer}>
            {editableIndex === index ? (
              <TouchableOpacity onPress={() => handleSave()}>
                <Icon name="save" size={20} color={theme.fontColors.black} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => handleEditItem(item.id, item.text, index)}>
                <Icon name="edit" size={20} color={theme.fontColors.black} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => handleDeleteItem(item.id)}
              style={styles.deleteButton}>
              <Icon name="trash-o" size={20} color={theme.fontColors.white} />
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
