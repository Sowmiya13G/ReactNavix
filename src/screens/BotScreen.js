import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addMessage} from '../redux/actions/BotActions';
import {getGPT3Response} from '../services/GPT3Services';

const ChatScreen = () => {
  const dispatch = useDispatch();
  const messages = useSelector(state => state.chat.messages);
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    dispatch(addMessage({text: message, sender: 'user'}));
    try {
      const botResponse = await getGPT3Response(message); // Use the imported function
      dispatch(addMessage({text: botResponse, sender: 'bot'}));
    } catch (error) {
      console.error('Error comminicating with GPT-3.5:', error);
      dispatch(
        addMessage({text: 'Sorry, I encountered an error.', sender: 'bot'}),
      );
    }
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey User</Text>
      <View>
        {messages.map((msg, index) => (
          <Text key={index}>{msg.text}</Text>
        ))}
      </View>
      <View>
        <TextInput value={message} onChangeText={text => setMessage(text)} />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 30,
    top: 20,
  },
});

export default ChatScreen;
