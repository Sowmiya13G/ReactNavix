import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import {styles} from './styles';
import {globalStyles} from '../../../components/GlobalStyles/globalStyles';
import {CommonGradient} from '../../../components/GlobalStyles/CommonGradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';

export default SignUpScreen = ({navigation}) => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'male', value: 'male'},
    {label: 'female', value: 'female'},
    {label: 'others', value: 'others'},
  ]);

  const handleSignUp = () => {
    navigation.navigate('HomeScreen');
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
            // onChangeText={text}
            style={styles.input}
          />
          {/* <Text style={styles.errorText}>
            {formErrors.username || (errors && errors.username)}
          </Text> */}

          <Text style={styles.title}>Email ID</Text>
          <CustomInput
            placeholder="Email"
            // onChangeText={text }
            style={styles.input}
          />
          {/* <Text style={styles.errorText}>
            {formErrors.email || (errors && errors.email)}
          </Text> */}
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
          />
          <Text style={styles.title}>Password</Text>
          <CustomInput
            placeholder="Password"
            // onChangeText={text}
            secureTextEntry
            style={styles.input}
          />
          {/* <Text style={styles.errorText}>
            {formErrors.password || (errors && errors.password)}
          </Text> */}

          <Text style={styles.title}>Confirm Password</Text>
          <CustomInput
            placeholder="Confirm Password"
            // onChangeText={text}
            secureTextEntry
            style={styles.input}
          />
          {/* <Text style={styles.errorText}>
            {formErrors.confirmPassword || (errors && errors.confirmPassword)}
          </Text> */}
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Agree the terms and conditions?"
            checked={checked}
            // checkedTitle="Agreed"
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
