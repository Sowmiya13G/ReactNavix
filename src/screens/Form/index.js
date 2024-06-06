import React, {useState, useRef} from 'react';
import {View, Text, Alert, FlatList} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {styles} from './styles';
import {
  ERROR_HANDLER_TEXT,
  placeholders,
  strings,
} from '../../constants/strings';
import Spacer from '../../components/Spacer';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const initialData = {
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
};

const initialErrData = {
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
};
const MyForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [errData, setErrData] = useState(initialErrData);
  const inputRefs = useRef({
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
  const scrollViewRef = useRef(null);

  const validation = () => {
    //copy err data
    let copiedErrData = {...initialErrData};
    switch (true) {
      case !formData.firstName:
        copiedErrData.firstName = ERROR_HANDLER_TEXT.enterFirstName;
        setErrData(copiedErrData);
        return false;
      case !formData.lastName:
        copiedErrData.lastName = ERROR_HANDLER_TEXT.enterLastName;
        setErrData(copiedErrData);
        return false;
      case !formData.age:
        copiedErrData.age = ERROR_HANDLER_TEXT.enterAge;
        setErrData(copiedErrData);
        return false;
      case !formData.phoneNumber:
        copiedErrData.phoneNumber = ERROR_HANDLER_TEXT.enterPhoneNumber;
        setErrData(copiedErrData);
        return false;
      case !formData.email:
        copiedErrData.email = ERROR_HANDLER_TEXT.enterEmail;
        setErrData(copiedErrData);
        return false;
      case !formData.address:
        copiedErrData.address = ERROR_HANDLER_TEXT.enterAddress;
        setErrData(copiedErrData);
        return false;
      case !formData.city:
        copiedErrData.city = ERROR_HANDLER_TEXT.enterCity;
        setErrData(copiedErrData);
        return false;
      case !formData.district:
        copiedErrData.district = ERROR_HANDLER_TEXT.enterDistrict;
        setErrData(copiedErrData);
        return false;
      case !formData.state:
        copiedErrData.state = ERROR_HANDLER_TEXT.enterState;
        setErrData(copiedErrData);
        return false;
      case !formData.designation:
        copiedErrData.designation = ERROR_HANDLER_TEXT.enterDesignation;
        setErrData(copiedErrData);
        return false;
      case !formData.city:
        copiedErrData.city = ERROR_HANDLER_TEXT.enterCity;
        setErrData(copiedErrData);
        return false;
      case !formData.experience:
        copiedErrData.experience = ERROR_HANDLER_TEXT.enterExperience;
        setErrData(copiedErrData);
        return false;
    }
  };
  // callback for seting data in data state
  const detailsDataCallback = (type, value) => {
    setErrData(initialErrData);
    let copiedData = {...formData};

    switch (type) {
      case 'FIRST_NAME':
        copiedData.firstName = value.replace(/[^A-Za-z ]/g, '');
        break;
      case 'LAST_NAME':
        copiedData.lastName = value;
        break;
      case 'AGE':
        copiedData.age = value.replace(/[^0-9 ]/g, '');
        break;
      case 'PHONE_NUMBER':
        copiedData.phoneNumber = value;
        break;
      case 'EMAIL':
        copiedData.email = value;
        break;
      case 'ADDRESS':
        copiedData.address = value;
        break;
      case 'CITY':
        copiedData.city = value;
        break;
      case 'DISTRICT':
        copiedData.district = value;
        break;
      case 'STATE':
        copiedData.state = value;
        break;
      case 'DESIGNATION':
        copiedData.designation = value;
        break;
      case 'COMPANY':
        copiedData.company = value;
        break;
      case 'EXPERIENCE':
        copiedData.experience = value;
        break;
    }
    setFormData(copiedData);
  };
  const submitForm = () => {
    if (validation()) {
      const emptyField = Object.keys(formData).find(key => !formData[key]);
      if (emptyField) {
        const nextFieldRef = inputRefs.current[emptyField];
        if (nextFieldRef && nextFieldRef.current) {
          nextFieldRef.current.focus();
        }
      }
    }
  };
  const handleSubmit = fieldName => {
    const nextField = getNextField(fieldName);
    if (nextField) {
      inputRefs[nextField].current.focus();
    }
  };

  const getNextField = currentField => {
    const fieldKeys = Object.keys(inputRefs);
    const currentIndex = fieldKeys.indexOf(currentField);
    if (currentIndex !== -1 && currentIndex < fieldKeys.length - 1) {
      return fieldKeys[currentIndex + 1];
    }
    return null;
  };

  const handleFieldFocus = fieldName => {
    const nextFieldRef = inputRefs.current[fieldName];
    if (nextFieldRef && nextFieldRef.current) {
      nextFieldRef.current.focus();
    }
  };

  const renderBody = () => {
    return (
      <>
        <CustomInput
          ref={ref => (inputRefs.current['firstName'] = ref)}
          placeholder={placeholders.enterFirstName}
          onChangeText={value => {
            detailsDataCallback('FIRST_NAME', value);
          }}
          value={formData.firstName}
          returnKeyType="next"
          label={strings.authLogin}
          error={errData.firstName}
          onSubmitEditing={() => handleFieldFocus('lastName')} // Define handleFieldFocus function
        />

        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterLastName}
          onChangeText={value => {
            detailsDataCallback('LAST_NAME', value);
          }}
          value={formData.lastName}
          returnKeyType="next"
          error={errData.lastName}
          onSubmitEditing={() => handleFieldFocus('lastName')} // Define handleFieldFocus function
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterAge}
          onChangeText={text => detailsDataCallback('AGE', text)}
          value={formData.age}
          error={errData.age}
          type="number"
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterPhoneNumber}
          onChangeText={text => detailsDataCallback('PHONE_NUMBER', text)}
          value={formData.phoneNumber}
          type="number"
          returnKeyType="next"
          error={errData.phoneNumber}
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterEmail}
          onChangeText={text => detailsDataCallback('EMAIL', text)}
          value={formData.email}
          type="email"
          error={errData.email}
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterAddress}
          onChangeText={text => detailsDataCallback('ADDRESS', text)}
          value={formData.address}
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />

        <CustomInput
          placeholder={placeholders.enterCity}
          onChangeText={text => detailsDataCallback('CITY', text)}
          value={formData.city}
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterDistrict}
          onChangeText={text => detailsDataCallback('DISTRICT', text)}
          value={formData.district}
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterState}
          onChangeText={text => detailsDataCallback('STATE', text)}
          value={formData.state}
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterDesignation}
          onChangeText={text => detailsDataCallback('DESIGNATION', text)}
          value={formData.designation}
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterCompany}
          onChangeText={text => detailsDataCallback('COMPANY', text)}
          value={formData.company}
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />
        <CustomInput
          placeholder={placeholders.enterExperience}
          onChangeText={text => detailsDataCallback('EXPERIENCE', text)}
          value={formData.experience}
          type="number"
          returnKeyType="next"
        />
        <Spacer height={heightPercentageToDP('1%')} />
      </>
    );
  };

  const renderFooter = () => {
    return <CustomButton label="Submit" handlePress={submitForm} logInButton />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={['DATA']}
        renderItem={renderBody}
        keyExtractor={item => item.type}
        showsVerticalScrollIndicator={false}
      />
      {renderFooter()}
    </View>
  );
};

export default MyForm;
// import React, {useState, useRef} from 'react';
// import {View, FlatList, ScrollView, Text, Alert} from 'react-native';
// import CustomInput from '../../components/CustomInput/CustomInput';
// import CustomButton from '../../components/CustomButton/CustomButton';
// import {
//   ERROR_HANDLER_TEXT,
//   placeholders,
//   strings,
// } from '../../constants/strings';
// import Spacer from '../../components/Spacer';
// import {heightPercentageToDP} from 'react-native-responsive-screen';
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

//   const inputRefs = useRef({});
//   const scrollViewRef = useRef(null);

//   const validation = () => {
//     let copiedErrData = {...errData};

//     for (const field in formData) {
//       if (!formData[field]) {
//         copiedErrData[field] =
//           ERROR_HANDLER_TEXT[
//             `enter${field.charAt(0).toUpperCase() + field.slice(1)}`
//           ];
//         setErrData(copiedErrData);

//         // Scroll to the input field with missing data
//         if (inputRefs.current[field] && inputRefs.current[field].current) {
//           scrollViewRef.current.scrollTo({
//             y: inputRefs.current[field].current.offsetTop,
//             animated: true,
//           });
//         }

//         return false;
//       }
//     }

//     return true;
//   };

//   const detailsDataCallback = (type, value) => {
//     setErrData(prevErrData => ({...prevErrData, [type]: ''}));
//     setFormData(prevFormData => ({...prevFormData, [type]: value}));
//   };

//   const submitForm = () => {
//     if (validation()) {
//       // Submit logic here
//     }
//   };

//   const renderItem = ({item}) => {
//     switch (item) {
//       case 'DATA':
//         return (
//           <>
//             <CustomInput
//               placeholder={placeholders.enterFirstName}
//               onChangeText={value => detailsDataCallback('firstName', value)}
//               value={formData.firstName}
//               returnKeyType="next"
//               label={strings.authLogin}
//               error={errData.firstName}
//               inputRef={inputRefs.current['firstName']}
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterAge}
//               onChangeText={text => detailsDataCallback('AGE', text)}
//               value={formData.age}
//               error={errData.age}
//               type="number"
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterPhoneNumber}
//               onChangeText={text => detailsDataCallback('PHONE_NUMBER', text)}
//               value={formData.phoneNumber}
//               type="number"
//               returnKeyType="next"
//               error={errData.phoneNumber}
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterEmail}
//               onChangeText={text => detailsDataCallback('EMAIL', text)}
//               value={formData.email}
//               type="email"
//               error={errData.email}
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterAddress}
//               onChangeText={text => detailsDataCallback('ADDRESS', text)}
//               value={formData.address}
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />

//             <CustomInput
//               placeholder={placeholders.enterCity}
//               onChangeText={text => detailsDataCallback('CITY', text)}
//               value={formData.city}
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterDistrict}
//               onChangeText={text => detailsDataCallback('DISTRICT', text)}
//               value={formData.district}
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterState}
//               onChangeText={text => detailsDataCallback('STATE', text)}
//               value={formData.state}
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterDesignation}
//               onChangeText={text => detailsDataCallback('DESIGNATION', text)}
//               value={formData.designation}
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterCompany}
//               onChangeText={text => detailsDataCallback('COMPANY', text)}
//               value={formData.company}
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//             <CustomInput
//               placeholder={placeholders.enterExperience}
//               onChangeText={text => detailsDataCallback('EXPERIENCE', text)}
//               value={formData.experience}
//               type="number"
//               returnKeyType="next"
//             />
//             <Spacer height={heightPercentageToDP('1%')} />
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   const renderFooter = () => {
//     return <CustomButton label="Submit" handlePress={submitForm} logInButton />;
//   };

//   return (
//     <ScrollView ref={scrollViewRef}>
//       <View style={styles.container}>
//         <FlatList
//           data={['DATA']}
//           renderItem={renderItem}
//           keyExtractor={item => item}
//           showsVerticalScrollIndicator={false}
//         />
//         {renderFooter()}
//       </View>
//     </ScrollView>
//   );
// };

// export default MyForm;
