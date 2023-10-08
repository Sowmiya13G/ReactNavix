import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogIn = () => {
    console.log('Button pressed');
  };

  const handleSignUp = () => {
    navigation.navigate('SignupScreen');
    console.log('Directing to Sign Up screen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.logIn}>LOG IN</Text>
      </View>
      <View style={styles.feilds}>
        <Text style={styles.title}>Email</Text>
        <CustomInput
          placeholder={'Enter your email'}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Text style={styles.title}>Password</Text>
        <CustomInput
          placeholder={'Enter your password'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot password?</Text>
        </TouchableOpacity>
        <CustomButton logInButton label="LOG IN" handlePress={handleLogIn} />
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
    height: '100%',
    backgroundColor: '#fff',
  },
  head: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: '#000000',
    marginBottom: 15,
  },
  feilds: {
    width: '80%',
  },
  forgot: {
    fontSize: 10,
    color: '#000',
    alignSelf: 'flex-end',
    right: 5,
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default LoginScreen;
