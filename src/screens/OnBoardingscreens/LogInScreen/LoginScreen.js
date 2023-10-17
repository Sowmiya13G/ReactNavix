import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import {styles} from './styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogIn = () => {
    console.log('Button pressed');
    navigation.navigate('HomeScreen');
  };

  const handleSignUp = () => {
    navigation.navigate('SignupScreen');
    console.log('Directing to Sign Up screen');
  };

  return (
    <CommonGradient>
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.logIn}>LOG IN</Text>
        </View>
        <View style={styles.fields}>
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
        </View>
        <View style={styles.fields}>
          <CustomButton logInButton label="LOG IN" handlePress={handleLogIn} />

          <Text style={styles.option}>or</Text>
          <Text style={styles.optionText}>Don't have an account?</Text>
          <CustomButton
            signUpButton
            label="SIGN UP"
            handlePress={handleSignUp}
          />
        </View>
      </View>
    </CommonGradient>
  );
};

export default LoginScreen;
