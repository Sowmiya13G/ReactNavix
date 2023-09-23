import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import TodoList from '../components/ToDo/ToDoList';
import AddTodo from '../components/ToDo/AddToDo';

export default function ToDoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ADD YOUR TODAY'S</Text>
      <View style={styles.todo}>
        <AddTodo />
      </View>
      <View style={styles.list}>
        <TodoList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    top: 20,
    color: '#000',
    fontSize: 30,
  },
  todo: {
    marginTop: 30,
    marginBottom: 30,
  },
  list: {
    // backgroundColor: '#000',
    width: '100%',
  },
});
