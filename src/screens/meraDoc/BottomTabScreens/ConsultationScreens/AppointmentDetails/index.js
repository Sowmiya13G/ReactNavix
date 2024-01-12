import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    FlatList,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import DocumentPicker from 'react-native-document-picker';

// Components
import Spacer from '../../../../../components/Spacer';
import CustomButton from '../../../../../components/CustomButton/CustomButton';
import CustomInput from '../../../../../components/CustomInput/CustomInput';

// Constants
import theme from '../../../../../constants/theme';
import { placeholders, strings } from '../../../../../constants/strings';
import commonImagePath from '../../../../../constants/images';
import { Background } from '../../../../../components/Background/background';
// Styles
import { styles } from './styles';

const AppointmentDetails = ({ route }) => {
    const [uploadedDocument, setUploadedDocument] = useState(null);

    const options = ['9:00am', '09:15am', '10:00am', '11:15am', '11:00am', '11:15am', '12:00am', '12:15am',]
    // Variales
    const navigation = useNavigation();

    handleOnPress = () => { }


    // upload document 
    const handleUploadDocument = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            });
            setUploadedDocument(result);
            ToastAndroid.show('Document uploaded Successfully!', ToastAndroid.SHORT)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                ToastAndroid.show('Document picker cancelled', ToastAndroid.SHORT);
                console.log('Document picker cancelled');
            } else {
                ToastAndroid.show(err, ToastAndroid.SHORT);
                console.error('Error picking document:', err);
            }
        }
    };

    const renderDocumentIcon = fileType => {
        if (fileType && fileType.startsWith('image/')) {
            return <Icon name="file-image-o" size={24} color="blue" />;
        } else if (fileType === 'application/pdf') {
            return <Icon name="file-pdf-o" size={24} color="red" />;
        } else {
            return <Icon name="file-o" size={24} color="black" />;
        }
    };

    const handleContinue = () => { }

    // Render UI .........................
    // Render Body
    const renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                    <View style={styles.content}>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <Text style={styles.title}>{strings.onlineCons}</Text>
                        <Spacer height={heightPercentageToDP('1%')} />
                        <Text style={styles.data}>{strings.date}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.title2}>{strings.docDetails}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={styles.docDetails}>
                        <Image source={commonImagePath.doct1} style={styles.image} />
                        <Spacer width={widthPercentageToDP('5%')} />
                        <View style={{ flexDirection: 'column', margin: '3%', top: '1%' }}>
                            <Text style={styles.data}>{strings.drName}</Text>
                            <Text style={styles.data}>{strings.genPhy}</Text>
                            <Text style={styles.data}>{strings.exp}</Text>
                        </View>
                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={{ flexDirection: 'row' }}>
                        <Spacer width={widthPercentageToDP('5%')} />
                        <Text style={styles.title2}>{strings.patientDetails}</Text>
                        <Spacer width={widthPercentageToDP('5%')} />
                        <Text style={styles.title}>{strings.changePatient}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={styles.docDetails}>
                        <Image source={commonImagePath.doct1} style={styles.image} />
                        <Spacer width={widthPercentageToDP('5%')} />
                        <View style={{ flexDirection: 'column', margin: '3%', top: '1%' }}>
                            <Text style={styles.data}>{strings.drName}</Text>
                            <Text style={styles.data}>{strings.genPhy}</Text>
                            <Text style={styles.data}>{strings.exp}</Text>
                        </View>
                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.title2}>{strings.addFam}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={styles.docDetails}>
                        <Image source={commonImagePath.doct1} style={styles.image} />
                        <Spacer width={widthPercentageToDP('5%')} />
                        <View style={{ flexDirection: 'column', margin: '3%', top: '1%' }}>
                            <Text style={styles.data}>{strings.drName}</Text>
                            <Text style={styles.data}>{strings.genPhy}</Text>
                            <Text style={styles.data}>{strings.exp}</Text>
                        </View>
                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={styles.docDetails}>
                        <Image source={commonImagePath.doct1} style={styles.image} />
                        <Spacer width={widthPercentageToDP('5%')} />
                        <View style={{ flexDirection: 'column', margin: '3%', top: '1%' }}>
                            <Text style={styles.data}>{strings.drName}</Text>
                            <Text style={styles.data}>{strings.genPhy}</Text>
                            <Text style={styles.data}>{strings.exp}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', padding: '5%', borderColor: 'grey', borderWidth: 1, margin: '6%', borderStyle: 'dashed' }}>
                        <Text style={styles.data}>+{strings.addNew}</Text>
                    </View>
                    <Spacer height={heightPercentageToDP('1%')} />
                    <Text style={styles.title2}>{strings.resonForCons}</Text>
                    <CustomInput multiline={true} placeholder={placeholders.enterHeight} />
                    <Spacer height={heightPercentageToDP('1%')} />
                    <Text style={styles.title2}>{strings.uploadReport}</Text>
                    <TouchableOpacity onPress={handleUploadDocument} style={styles.upload}>
                        <Image source={commonImagePath.upload} />
                        <Spacer width={widthPercentageToDP('5%')} />
                        <Text style={styles.data}>{strings.upload}</Text>
                        <Spacer width={widthPercentageToDP('5%')} />
                    </TouchableOpacity>
                    {uploadedDocument && (
                        <View style={styles.documentContainer}>
                            {uploadedDocument.type && renderDocumentIcon(uploadedDocument.type)} {/* Ensure fileType exists */}
                            {/* <Text style={styles.documentText}>
                                {getFileName(uploadedDocument.uri)}
                            </Text> */}
                        </View>
                    )}
                    <Spacer height={heightPercentageToDP('2%')} />
                    <Text style={styles.title2}>{strings.applyCoupon}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    {/* <View style={{ flexDirection: 'row', width:widthPercentageToDP('90%') }}>
                        <CustomInput placeholder='Discount' />
                        <View style={{ zIndex:1, position: 'absolute', right: 20 }}>
                            <CustomButton
                                primaryButton
                                textStyle={styles.buttonTxt}
                                label={strings.applyCoupon}
                                handlePress={handleContinue}
                                style={styles.input}
                                />
                        </View>
                    </View> */}
                    <Text style={styles.title2}>{strings.otherDetails}</Text>
                    <Spacer height={heightPercentageToDP('2%')} />
                    <View style={styles.content}>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.data}>{strings.consulCharge}</Text>
                            <Text style={styles.data}>₹ 150</Text>
                        </View>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.data}>{strings.bookingCharges}</Text>
                            <Text style={styles.data}>₹ 100</Text>
                        </View>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.data}>{strings.tax}</Text>
                            <Text style={styles.data}>₹ 20</Text>
                        </View>
                        <Spacer height={heightPercentageToDP('2%')} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.data}>{strings.totalAmt}</Text>
                            <Text style={styles.data2}>₹ 270</Text>
                        </View>
                    </View>

                    <View style={styles.button}>
                        <CustomButton
                            primaryButton
                            textStyle={styles.buttonTxt}
                            label={strings.continue}
                            handlePress={handleContinue}
                        />
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    };

    // Render Header
    const renderHeader = () => {
        return (
            <View style={styles.header}>
                <Spacer height={heightPercentageToDP('8%')} />
                <TouchableOpacity onPress={() => goBack()} >
                    <Icon name="bars" size={25} color={theme.fontColors.white} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.heading}>{strings.appointmentDetails}</Text>
                <Spacer width={widthPercentageToDP('15%')} />
                <Image source={commonImagePath.call} />
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <Background
                backgroundImageStyle={styles.backgroundCurve} union={false}
            />
            <FlatList
                data={['BOOK_CONSULTATION']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );

};


export default AppointmentDetails;
