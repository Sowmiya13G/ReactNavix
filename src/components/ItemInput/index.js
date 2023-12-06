import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addItem} from '../../redux/features/ItemSlice';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ItemInput = () => {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (!item.trim()) return;
    const savedItems = dispatch(addItem(item));
    console.log('savedItems', savedItems);
    setItem('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.inputField}
        value={item}
        onChangeText={text => setItem(text)}
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

export default ItemInput;
