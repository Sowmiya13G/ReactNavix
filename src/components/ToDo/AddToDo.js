import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addToDo} from '../../redux/actions/ToDoActions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addHandler = () => {
    if (text.trim() !== '') {
      dispatch(addToDo(text));
      setText('');
      console.log(text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a todo..."
          style={styles.input}
          onChangeText={value => setText(value)}
          value={text}
          placeholderTextColor="grey"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={addHandler}>
        <Text style={styles.add}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    width: '80%',
    // margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
    width: 20,
  },
  button: {
    tintColor: '#fff',
    backgroundColor: '#000',
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2,
    alignSelf: 'center',
  },
  add: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    // alignContent: 'center',
  },
});
export default AddTodo;
