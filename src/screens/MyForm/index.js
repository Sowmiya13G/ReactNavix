// import React, { useRef, useState } from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import { heightPercentageToDP } from 'react-native-responsive-screen';
// import Spacer from '../../components/Spacer';
// import { styles } from '../Form/styles';

// const validationSchema = Yup.object().shape({
//   firstName: Yup.string().required('Required'),
//   lastName: Yup.string().required('Required'),
//   age: Yup.number()
//     .required('Required')
//     .positive('Age must be a positive number')
//     .integer('Age must be an integer'),
//   phoneNumber: Yup.string().required('Required'),
//   email: Yup.string().email('Invalid email').required('Required'),
//   address: Yup.string().required('Required'),
//   city: Yup.string().required('Required'),
//   district: Yup.string().required('Required'),
//   state: Yup.string().required('Required'),
//   designation: Yup.string().required('Required'),
//   company: Yup.string().required('Required'),
//   experience: Yup.string().required('Required'),
// });



// const MyForm = () => {
//   const scrollViewRef = useRef(null);
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

//   const handleSubmit = async (values, { setFieldError }) => {
//     try {
//       await validationSchema.validate(values, { abortEarly: false });
//     } catch (error) {
//       error.inner.forEach(({ path, message }) => {
//         setFieldError(path, message);
//       });

//       scrollViewRef.current.scrollTo({
//         y: 0,
//         animated: true,
//       });

//       return;
//     }

//     console.log(values);
//   };

//   return (
//     <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
//       <Formik
//         initialValues={formData}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}>
//         {({
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           values,
//           errors,
//           touched,
//         }) => (
//           <View style={styles.container}>
//             {Object.keys(formData).map(key => (
//               <View key={key}>
//                 <CustomInput
//                   placeholder={`Enter ${key}`}
//                   onChangeText={handleChange(key)}
//                   onBlur={handleBlur(key)}
//                   value={values[key]}
//                   returnKeyType="next"
//                   onSubmitEditing={() => inputRefs[key + 'Ref'].current.focus()}
//                   ref={inputRefs[`${key}Ref`]}
//                 />
//                 {touched[key] && errors[key] ? <Text>{errors[key]}</Text> : null}
//                 <Spacer height={heightPercentageToDP('1%')} />
//               </View>
//             ))}
//             <CustomButton
//               label="Submit"
//               handlePress={handleSubmit}
//               logInButton
//             />
//           </View>
//         )}
//       </Formik>
//     </ScrollView>
//   );
// };

// export default MyForm;


// import React, { useRef } from 'react';
// import { View, TextInput, Button, Text, ScrollView } from 'react-native';
// import { Formik } from 'formik';
// import * as Yup from 'yup';

// const validationSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Required'),
//   password: Yup.string().min(6, 'Too Short!').required('Required'),
// });

// const MyForm = () => {
//   const scrollViewRef = useRef(null);

//   const handleSubmit = async (values, { setFieldError }) => {
//     try {
//       await validationSchema.validate(values, { abortEarly: false });
//     } catch (error) {
//       error.inner.forEach(({ path, message }) => {
//         setFieldError(path, message);
//       });

//       let firstErrorYCoordinate = null;
//       error.inner.some(({ path }) => {
//         const inputRef = scrollViewRef.current[path];
//         if (inputRef && inputRef.measureLayout) {
//           inputRef.measureLayout(
//             scrollViewRef.current,
//             (x, y) => {
//               firstErrorYCoordinate = y;
//             }
//           );
//           return true;
//         }
//         return false;
//       });

//       if (firstErrorYCoordinate !== null) {
//         scrollViewRef.current.scrollTo({ y: firstErrorYCoordinate, animated: true });
//       }

//       return;
//     }

//     console.log(values);
//   };

//   return (
//     <ScrollView ref={scrollViewRef} contentContainerStyle={{ flexGrow: 1 }}>
//       <Formik
//         initialValues={{ email: '', password: '' }}
//         onSubmit={handleSubmit}
//         validationSchema={validationSchema}
//       >
//         {({
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           values,
//           errors,
//           touched,
//         }) => (
//           <View>
//             <TextInput
//               ref={input => (scrollViewRef.current.email = input)}
//               onChangeText={handleChange('email')}
//               onBlur={handleBlur('email')}
//               value={values.email}
//               placeholder="Email"
//             />
//             {touched.email && errors.email && <Text>{errors.email}</Text>}

//             <TextInput
//               ref={input => (scrollViewRef.current.password = input)}
//               onChangeText={handleChange('password')}
//               onBlur={handleBlur('password')}
//               value={values.password}
//               secureTextEntry
//               placeholder="Password"
//             />
//             {touched.password && errors.password && (
//               <Text>{errors.password}</Text>
//             )}

//             <Button onPress={handleSubmit} title="Submit" />
//           </View>
//         )}
//       </Formik>
//     </ScrollView>
//   );
// };

// export default MyForm;

import React, { useState, useRef } from 'react';
import { View, Text, FlatList, TextInput } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import Spacer from '../../components/Spacer';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { styles } from '../Form/styles';

const MyForm = () => {
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  age: '',
  phoneNumber: '',
  email: '',
  address: '',
  city: '',
  district: '',
  state: '',
  designation: '',
  company: '',
  experience: '',
});
const [errData, setErrData] = useState({
  firstName: '',
  lastName: '',
  age: '',
  phoneNumber: '',
  email: '',
  address: '',
  city: '',
  district: '',
  state: '',
  designation: '',
  company: '',
  experience: '',
});

const inputRefs = {
  lastNameRef: useRef(null),
  ageRef: useRef(null),
  phoneNumberRef: useRef(null),
  emailRef: useRef(null),
  addressRef: useRef(null),
  cityRef: useRef(null),
  districtRef: useRef(null),
  stateRef: useRef(null),
  designationRef: useRef(null),
  companyRef: useRef(null),
  experienceRef: useRef(null),
};

  const focusNextField = (nextField) => {
    inputRefs[nextField].current.focus();
  };

  const handleSubmitEditing = (currentField, nextField) => {
    if (nextField) {
      focusNextField(nextField);
    } else {
      // Perform form submission or any other action here
    }
  };

  const detailsDataCallback = (type, value) => {
    setErrData({ ...errData, [type]: '' });
    setFormData({ ...formData, [type]: value });
  };

  const validation = () => {
    let isValid = true;
    const copiedErrData = { ...errData };
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        copiedErrData[key] = `Please enter ${key}`;
        isValid = false;
      }
    });
    setErrData(copiedErrData);
    return isValid;
  };

  const submitForm = () => {
    if (validation()) {
      // Proceed with form submission
    }
  };

  const renderBody = () => {
    return (
      <>
        {Object.keys(formData).map((key) => (
          <View key={key}>
            <CustomInput
              placeholder={`Enter ${key}`}
              onChangeText={(value) => detailsDataCallback(key, value)}
              value={formData[key]}
              returnKeyType="next"
              onSubmitEditing={() => handleSubmitEditing(key, getNextField(key))}
              ref={inputRefs[`${key}Ref`]}
            />
            {errData[key] ? <Text>{errData[key]}</Text> : null}
            <Spacer height={heightPercentageToDP('1%')} />
          </View>
        ))}
      </>
    );
  };

  const getNextField = (currentField) => {
    const fieldKeys = Object.keys(inputRefs);
    const currentIndex = fieldKeys.indexOf(`${currentField}Ref`);
    if (currentIndex !== -1 && currentIndex < fieldKeys.length - 1) {
      return fieldKeys[currentIndex + 1].replace('Ref', '');
    }
    return null;
  };

  const renderFooter = () => {
    return <CustomButton label="Submit" handlePress={submitForm} logInButton />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={['DATA']}
        renderItem={renderBody}
        keyExtractor={(item) => item.type}
      />
      {renderFooter()}
    </View>
  );
};

export default MyForm;

// <TextInput
// ref={inputRefs.lastNameRef}
// onChangeText={handleChange('lastName')}
// onBlur={handleBlur('lastName')}
// value={values.lastName}
// placeholder="Last Name"
// />
// {touched.lastName && errors.lastName && (
// <Text>{errors.lastName}</Text>
// )}

// <TextInput
// ref={inputRefs.ageRef}
// onChangeText={handleChange('age')}
// onBlur={handleBlur('age')}
// value={values.age}
// placeholder="Age"
// keyboardType="numeric"
// />
// {touched.age && errors.age && <Text>{errors.age}</Text>}

// <TextInput
// ref={inputRefs.phoneNumberRef}
// onChangeText={handleChange('phoneNumber')}
// onBlur={handleBlur('phoneNumber')}
// value={values.phoneNumber}
// placeholder="Phone Number"
// />
// {touched.phoneNumber && errors.phoneNumber && (
// <Text>{errors.phoneNumber}</Text>
// )}

// <TextInput
// ref={inputRefs.emailRef}
// onChangeText={handleChange('email')}
// onBlur={handleBlur('email')}
// value={values.email}
// placeholder="Email"
// />
// {touched.email && errors.email && <Text>{errors.email}</Text>}

// <TextInput
// ref={inputRefs.addressRef}
// onChangeText={handleChange('address')}
// onBlur={handleBlur('address')}
// value={values.address}
// placeholder="Address"
// />
// {touched.address && errors.address && <Text>{errors.address}</Text>}

// <TextInput
// ref={inputRefs.cityRef}
// onChangeText={handleChange('city')}
// onBlur={handleBlur('city')}
// value={values.city}
// placeholder="City"
// />
// {touched.city && errors.city && <Text>{errors.city}</Text>}

// <TextInput
// ref={inputRefs.districtRef}
// onChangeText={handleChange('district')}
// onBlur={handleBlur('district')}
// value={values.district}
// placeholder="District"
// />
// {touched.district && errors.district && (
// <Text>{errors.district}</Text>
// )}

// <TextInput
// ref={inputRefs.stateRef}
// onChangeText={handleChange('state')}
// onBlur={handleBlur('state')}
// value={values.state}
// placeholder="State"
// />
// {touched.state && errors.state && <Text>{errors.state}</Text>}

// <TextInput
// ref={inputRefs.designationRef}
// onChangeText={handleChange('designation')}
// onBlur={handleBlur('designation')}
// value={values.designation}
// placeholder="Designation"
// />
// {touched.designation && errors.designation && (
// <Text>{errors.designation}</Text>
// )}
// <TextInput
// ref={inputRefs.companyRef}
// onChangeText={handleChange('company')}
// onBlur={handleBlur('company')}
// value={values.company}
// placeholder="Company"
// />
// {touched.company && errors.company && <Text>{errors.company}</Text>}

// <TextInput
// ref={inputRefs.experienceRef}
// onChangeText={handleChange('experience')}
// onBlur={handleBlur('experience')}
// value={values.experience}
// placeholder="Experience"
// />
// {touched.experience && errors.experience && (
// <Text>{errors.experience}</Text>
// )}
