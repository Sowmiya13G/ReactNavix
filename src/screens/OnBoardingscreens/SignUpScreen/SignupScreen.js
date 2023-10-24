import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {signUp} from '../../../redux/actions/userActions';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import {globalStyles} from '../../../components/GlobalStyles/globalStyles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import {
  validateEmail,
  validateUserName,
  validatePassword,
  validatePasswordMatch,
} from '../../../utils/validations';

export default SignUpScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'male', value: 'male'},
    {label: 'female', value: 'female'},
    {label: 'others', value: 'others'},
  ]);
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    gender: '',
    password: '',
    confirmPassword: '',
  });
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const handleSignUp = async () => {
    // Validate the user details
    const usernameValidation = validateUserName(userDetails.username);
    const emailValidation = validateEmail(userDetails.email);
    const passwordValidation = validatePassword(userDetails.password);
    const passwordMatchValidation = validatePasswordMatch(
      userDetails.password,
      userDetails.confirmPassword,
    );

    // Update error messages
    setUsernameError(usernameValidation);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    setConfirmPasswordError(passwordMatchValidation);

    // Check if any validation errors exist
    if (
      usernameValidation ||
      emailValidation ||
      passwordValidation ||
      passwordMatchValidation
    ) {
      return; // Do not proceed with sign-up if there are errors
    }

    try {
      await AsyncStorage.setItem('userDetails', JSON.stringify(userDetails));

      dispatch(signUp(userDetails));
      console.log(userDetails);
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.error('Error saving user details:', error);
    }
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  };

  const handleLogIn = () => {
    navigation.navigate('LoginScreen');
  };
  return (
    <CommonGradient>
      <View style={[styles.container, globalStyles]}>
        <View style={styles.head}>
          <Text style={styles.signup}>Sign Up</Text>
        </View>
        <View style={styles.fields}>
          <Text style={styles.title}>User Name</Text>
          <CustomInput
            placeholder="Username"
            onChangeText={text =>
              setUserDetails({...userDetails, username: text})
            }
            style={styles.input}
          />
          <Text style={styles.errorText}>{usernameError}</Text>

          <Text style={styles.title}>Email ID</Text>
          <CustomInput
            placeholder="Email"
            onChangeText={text => setUserDetails({...userDetails, email: text})}
            style={styles.input}
          />
          <Text style={styles.errorText}>{emailError}</Text>
          <Text style={styles.title}>Gender</Text>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: 'transparent',
              borderColor: '#fff',
            }}
            textStyle={{color: '#fff'}}
            dropDownContainerStyle={{
              backgroundColor: '#ccc',
              borderWidth: 0,
            }}
            onChangeItem={item =>
              setUserDetails({...userDetails, gender: item.value})
            }
          />
          <Text style={styles.title}>Password</Text>
          <CustomInput
            placeholder="Password"
            onChangeText={text =>
              setUserDetails({...userDetails, password: text})
            }
            secureTextEntry
            style={styles.input}
          />
          <Text style={styles.errorText}>{passwordError}</Text>

          <Text style={styles.title}>Confirm Password</Text>
          <CustomInput
            placeholder="Confirm Password"
            onChangeText={text =>
              setUserDetails({...userDetails, confirmPassword: text})
            }
            secureTextEntry
            style={styles.input}
          />
          <Text style={styles.errorText}>{confirmPasswordError}</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Agree the terms and conditions?"
            checked={checked}
            onPress={() => setChecked(!checked)}
            containerStyle={{backgroundColor: 'transparent', borderWidth: 0}}
            uncheckedColor="white"
            checkedColor="white"
            textStyle={{color: '#fff'}}
          />
        </View>
        <View style={styles.fields}>
          <CustomButton
            signUpButton
            label="SIGN UP"
            handlePress={handleSignUp}
          />
          {/* <Text style={styles.option}>or</Text> */}
          <Text style={styles.optionText}>Already have an account?</Text>
          <CustomButton logInButton label="LOG IN" handlePress={handleLogIn} />
        </View>
      </View>
    </CommonGradient>
  );
};
