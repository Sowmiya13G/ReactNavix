// import React, {useState} from 'react';
// import {
//   View,
//   TextInput,
//   FlatList,
//   Text,
//   TouchableOpacity,
//   KeyboardAvoidingView,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {useDispatch, useSelector} from 'react-redux';
// import {addTodo, editTodo, deleteTodo} from '../../../redux/features/todoSlice';
// import {styles} from './styles';
// const TodoScreen = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector(state => state.todos);

//   const [newTodo, setNewTodo] = useState('');
//   const [editedTodo, setEditedTodo] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editableIndex, setEditableIndex] = useState(-1);
//   const handleAddTodo = () => {
//     if (newTodo.trim() !== '') {
//       if (editedTodo) {
//         dispatch(editTodo({id: editedTodo.id, text: newTodo}));
//         setEditedTodo(null);
//         setIsEditing(false);
//       } else {
//         dispatch(addTodo(newTodo));
//       }
//       setNewTodo('');
//     }
//   };
//   const handleSave = () => {
//     setIsEditing(false);
//     setEditableIndex(-1);
//   };
//   const handleEditTodo = (id, text, index) => {
//     setEditedTodo({id, text});
//     setNewTodo(text);
//     setEditableIndex(index);
//   };
//   const handleEditItem = (id, text) => {
//     dispatch(editTodo({id, text}));
//     setEditedTodo(null);
//     setIsEditing(false);
//   };
//   const handleDeleteTodo = id => {
//     dispatch(deleteTodo(id));
//   };

//   const renderInput = () => {
//     return (
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={styles.inputContainer}>
//         <TextInput
//           style={styles.inputField}
//           value={newTodo}
//           onChangeText={text => setNewTodo(text)}
//           placeholder={'Enter item'}
//           placeholderTextColor={'#fff'}
//         />
//         <TouchableOpacity onPress={handleAddTodo}>
//           <View style={styles.button}>
//             <Icon name="arrow-up" size={24} color="black" />
//           </View>
//         </TouchableOpacity>
//       </KeyboardAvoidingView>
//     );
//   };
//   const renderBody = ({index, item}) => {
//     console.log('Rendering item:', item);
//     return (
//       <View style={styles.itemContainer}>
//         <View style={styles.indexContainer}>
//           <Text style={styles.index}>{index + 1}</Text>
//         </View>
//         <View style={styles.itemView}>
//           <TextInput
//             value={item.text}
//             onChangeText={text => handleEditItem(item.id, text)}
//             style={[
//               styles.taskContainer,
//               {color: editableIndex === index ? '#000' : '#FFF'},
//             ]}
//             editable={editableIndex === index}
//           />
//           <View style={styles.buttonsContainer}>
//             {editableIndex === index ? (
//               <TouchableOpacity onPress={() => handleSave()}>
//                 <Icon name="save" size={20} color="#000" />
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity
//                 onPress={() => handleEditTodo(item.id, item.text, index)}>
//                 <Icon name="edit" size={20} color="#000" />
//               </TouchableOpacity>
//             )}
//             <TouchableOpacity
//               onPress={() => handleDeleteTodo(item.id)}
//               style={styles.deleteButton}>
//               <Icon name="trash-o" size={20} color="#FFF" />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>TODAY'S ITEM LIST</Text>
//       <FlatList
//         data={todos}
//         keyExtractor={item => item.id.toString()}
//         renderItem={renderBody}
//       />
//       {renderInput()}
//     </View>
//   );
// };

// export default TodoScreen;
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function index() {
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
