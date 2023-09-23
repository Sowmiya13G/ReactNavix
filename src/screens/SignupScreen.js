//SignupScreen.js
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton/CustomButton';
import CustomInput from '../components/CustomInput/CustomInput';
import {storeData} from '../redux/actions/Action';

const SignupScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSignUp = () => {
    dispatch(storeData(email, password, username)); // Dispatch the action
    navigation.navigate('HomeScreen'); // Navigate to the HomeScreen
  };
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.signup}>Sign Up</Text>
      </View>
      <View style={styles.feilds}>
        <Text style={styles.title}>Email ID</Text>
        <CustomInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.title}>Password</Text>
        <CustomInput
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          style={styles.input}
        />
        <Text style={styles.title}>User Name</Text>
        <CustomInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          style={styles.input}
        />
        <CustomButton signUpButton label="SIGN UP" handlePress={handleSignUp} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  feilds: {
    width: '80%',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    left: 0,
    color: '#000000',
  },
});

export default SignupScreen;
