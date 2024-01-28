import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import {styles} from './styles';
import {placeholders, strings} from '../../../constants/strings';
import theme from '../../../constants/theme';

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

  const continueWithGoogle = () => {};

  return (
    <CommonGradient>
      <StatusBar backgroundColor={theme.backgroundColor.status} barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.logIn}>{strings.loginTitle}</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.title}>{strings.email}</Text>
          <CustomInput
            placeholder={placeholders.enterEmail}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.title}>{strings.password}</Text>
          <CustomInput
            placeholder={placeholders.enterPassword}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
          <TouchableOpacity>
            <Text style={styles.forgot}>{strings.passwordOption}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.fields}>
          <CustomButton logInButton label="LOG IN" handlePress={handleLogIn} />
          <CustomButton
            optionButton
            label="SIGN UP"
            handlePress={handleSignUp}
          />
        </View>
        <TouchableOpacity onPress={continueWithGoogle}>
          <Text style={styles.optionText}>{strings.googleLogin}</Text>
        </TouchableOpacity>
      </View>
    </CommonGradient>
  );
};

export default LoginScreen;
