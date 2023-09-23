import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {toggleToDo, removeToDo} from '../../redux/actions/ToDoActions';
import Swipeout from 'react-native-swipeout';

const TodoList = () => {
  const todos = useSelector(state =>
    state.todos.todos.filter(todo => todo !== null),
  );
  const dispatch = useDispatch();

  const toggleHandler = id => {
    dispatch(toggleToDo(id));
  };

  const removeHandler = id => {
    dispatch(removeToDo(id));
  };

  const renderTodoItem = item => {
    const swipeoutBtns = [
      {
        text: 'Delete',
        backgroundColor: 'red',
        onPress: () => removeHandler(item.id),
      },
    ];
    return (
      <Swipeout right={swipeoutBtns} autoClose={true}>
        <TouchableOpacity onPress={() => toggleHandler(item.id)}>
          <View style={styles.item}>
            <Text
              style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
                fontSize: 20,
                color: '#000',
                fontWeight: 'bold',
              }}>
              {item.text}
            </Text>
            <View style={styles.checkboxContainer}>
              <View
                style={[
                  styles.checkbox,
                  {
                    backgroundColor: item.completed ? 'green' : 'white',
                  },
                ]}></View>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => renderTodoItem(item)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'black',
    width: '100%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: 'green',
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: 3,
  },
});

export default TodoList;
