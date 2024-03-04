import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});

const MyForm = () => {
  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View>
          <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            placeholder="Email"
          />
          {touched.email && errors.email && <Text>{errors.email}</Text>}

          <TextInput
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
            placeholder="Password"
          />
          {touched.password && errors.password && <Text>{errors.password}</Text>}

          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default MyForm;

// import React, { useState, useRef } from 'react';
// import { View, Text, FlatList, TextInput } from 'react-native';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import Spacer from '../../components/Spacer';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
// import { styles } from './styles';

// const MyForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     phoneNumber: '',
//     email: '',
//     address: '',
//     city: '',
//     district: '',
//     state: '',
//     designation: '',
//     company: '',
//     experience: '',
//   });
//   const [errData, setErrData] = useState({
//     firstName: '',
//     lastName: '',
//     age: '',
//     phoneNumber: '',
//     email: '',
//     address: '',
//     city: '',
//     district: '',
//     state: '',
//     designation: '',
//     company: '',
//     experience: '',
//   });

//   const inputRefs = {
//     lastNameRef: useRef(null),
//     ageRef: useRef(null),
//     phoneNumberRef: useRef(null),
//     emailRef: useRef(null),
//     addressRef: useRef(null),
//     cityRef: useRef(null),
//     districtRef: useRef(null),
//     stateRef: useRef(null),
//     designationRef: useRef(null),
//     companyRef: useRef(null),
//     experienceRef: useRef(null),
//   };

//   const focusNextField = (nextField) => {
//     inputRefs[nextField].current.focus();
//   };

//   const handleSubmitEditing = (currentField, nextField) => {
//     if (nextField) {
//       focusNextField(nextField);
//     } else {
//       // Perform form submission or any other action here
//     }
//   };

//   const detailsDataCallback = (type, value) => {
//     setErrData({ ...errData, [type]: '' });
//     setFormData({ ...formData, [type]: value });
//   };

//   const validation = () => {
//     let isValid = true;
//     const copiedErrData = { ...errData };
//     Object.keys(formData).forEach((key) => {
//       if (!formData[key]) {
//         copiedErrData[key] = `Please enter ${key}`;
//         isValid = false;
//       }
//     });
//     setErrData(copiedErrData);
//     return isValid;
//   };

//   const submitForm = () => {
//     if (validation()) {
//       // Proceed with form submission
//     }
//   };

//   const renderBody = () => {
//     return (
//       <>
//         {Object.keys(formData).map((key) => (
//           <View key={key}>
//             <CustomInput
//               placeholder={`Enter ${key}`}
//               onChangeText={(value) => detailsDataCallback(key, value)}
//               value={formData[key]}
//               returnKeyType="next"
//               onSubmitEditing={() => handleSubmitEditing(key, getNextField(key))}
//               ref={inputRefs[`${key}Ref`]}
//             />
//             {errData[key] ? <Text>{errData[key]}</Text> : null}
//             <Spacer height={heightPercentageToDP('1%')} />
//           </View>
//         ))}
//       </>
//     );
//   };

//   const getNextField = (currentField) => {
//     const fieldKeys = Object.keys(inputRefs);
//     const currentIndex = fieldKeys.indexOf(`${currentField}Ref`);
//     if (currentIndex !== -1 && currentIndex < fieldKeys.length - 1) {
//       return fieldKeys[currentIndex + 1].replace('Ref', '');
//     }
//     return null;
//   };

//   const renderFooter = () => {
//     return <CustomButton label="Submit" handlePress={submitForm} logInButton />;
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={['DATA']}
//         renderItem={renderBody}
//         keyExtractor={(item) => item.type}
//       />
//       {renderFooter()}
//     </View>
//   );
// };

// export default MyForm;
