import React, { useState } from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList,
    Image,
    SectionList,
    Modal
} from 'react-native';

// Packages
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

// Constants
import theme from '../../../constants/theme';
import { strings } from '../../../constants/strings';
import commonImagePath from '../../../constants/images';
import { galleryData, memoriesImages } from '../../../constants/onBoardingData';

// Components
import Spacer from '../../../components/Spacer';

// Styles
import { styles } from './styles';

const MileStone = () => {
    const navigation = useNavigation()

    // Local state 
    const [searchText, setSearchText] = useState('');
    const [selectedItem, setSelectedItem] = useState('Memories');
    const [memories, setMemories] = useState(true);
    const [gallery, setGallery] = useState(false);
    const [saved, setSaved] = useState(false);
    const [numOfColumns, setNumOfColumns] = useState(2);
    const [selectedImages, setSelectedImages] = useState([]);
    const [savedImages, setSavedImages] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [select, setSelect] = useState(false)

    // Variables
    const tabs = ['Memories', 'Gallery', 'Saved']
    const totalImageCount = galleryData.reduce((acc, section) => acc + section.data.length, 0);

    // Functions
    const goBack = () => {
        navigation.navigate('HomeTab');
    }
    const handleSearch = () => {
        console.log('Search Text:', searchText);
    };
    const handleTabPress = (tab) => {
        setSelectedItem(tab);
        setMemories(tab === 'Memories');
        setGallery(tab === 'Gallery');
        setSaved(tab === 'Saved');
        setNumOfColumns(tab === 'Memories' ? 2 : 'Saved' ? 2 : 1);
    };

    const handleLongPress = (item) => {
        setSelect(true)
        const isSelected = selectedImages.includes(item);
        if (isSelected) {
            setSelectedImages(selectedImages.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedImages([...selectedImages, item]);
        }
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    // const handleSaveConfirmation = () => {
    //     if (selectedImages.length > 0) {
    //         openModal();
    //     }
    //     setSavedImages([...savedImages, ...selectedImages]);
    //     setSelectedImages([]);
    //     closeModal();
    //     handleTabPress('Saved');
    // };
    const handleSaveConfirmation = () => {
        if (selectedImages.length > 0) {
            setSavedImages([...savedImages, ...selectedImages]);
            setSelectedImages([]);
            closeModal();
            handleTabPress('Saved');
        }
    };
    const handlePress = (item) => {
        const isSelected = selectedImages.includes(item);
        if (isSelected) {
            setSelectedImages(selectedImages.filter((selectedItem) => selectedItem !== item));
        } else {
            setSelectedImages([...selectedImages, item]);
        }
    };
    // REnder UI............
    const renderGalleryItem = (data) => {
        return (
            <FlatList
                data={data.list}
                keyExtractor={(item, index) => `${index}:${item.image}`}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        onLongPress={() => handleLongPress(item)}
                        onPress={() => handlePress(item)}
                        style={styles.listItem}
                    >
                        <Image source={item.image} style={styles.listImage} />
                        {select && <>
                            {selectedImages.includes(item) ? (
                                <Icon name="check-circle" size={25} color={theme.fontColors.themeBlue} style={styles.checkIcon} />
                            ) : (
                                <Icon name="circle" size={25} color={theme.fontColors.gray} style={styles.checkIcon} />
                            )}
                        </>
                        }
                    </TouchableOpacity>
                )}
                numColumns={4}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            />
        );
    };

    const renderBody = () => {
        return (
            <>
                <Spacer height={heightPercentageToDP('2%')} />
                <View style={styles.search}>
                    <View style={styles.SearchContainer}>
                        <Spacer width={widthPercentageToDP('2%')} />
                        <TouchableOpacity onPress={handleSearch}>
                            <Image source={commonImagePath.search} style={styles.searchIcon} />
                        </TouchableOpacity>
                        <Spacer width={widthPercentageToDP('2%')} />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Search..."
                            value={searchText}
                            onChangeText={(text) => setSearchText(text)}
                            placeholderTextColor={theme.fontColors.gray}
                        />
                    </View>
                    <Spacer width={widthPercentageToDP('2%')} />
                    <TouchableOpacity style={styles.addView}>
                        <Text style={styles.add}>+</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.switchView}>
                    <Spacer width={widthPercentageToDP('10%')} />
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            style={[
                                styles.tab,
                                selectedItem === tab ? styles.selectedTab : null,
                            ]}
                            onPress={() => handleTabPress(tab)}
                        >
                            <Text style={[
                                styles.tabText,
                                { color: (memories && tab === 'Memories') || (gallery && tab === 'Gallery') || (saved && tab === 'Saved') ? theme.fontColors.themeBlue : theme.fontColors.gray }
                            ]}>
                                {tab}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <Spacer width={widthPercentageToDP('10%')} />
                {memories && (
                    <FlatList
                        data={memoriesImages}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.memories}>
                                <Image source={item.image} style={styles.image} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        contentContainerStyle={styles.memories}
                        horizontal={false}
                        numColumns={numOfColumns}
                        key={numOfColumns}
                    />
                )}
                {gallery && (
                    <View style={styles.listContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Spacer width={widthPercentageToDP('30%')} />
                            <Text style={styles.buttonText}>{totalImageCount} photos  {totalImageCount} videos</Text>
                            <Spacer width={widthPercentageToDP('20%')} />
                            {selectedImages.length > 0 && (
                                <TouchableOpacity onPress={() => { openModal() }}>
                                    <Text style={styles.text2}>SAVE</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        <SectionList
                            sections={galleryData}
                            keyExtractor={(item, index) => `${index}:${item.image}`}
                            renderItem={({ item }) => (renderGalleryItem(item))}
                            renderSectionHeader={({ section }) => (
                                <Text style={styles.listHeader}>{section.title}</Text>
                            )}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                )}
                {saved && (
                    <FlatList
                        data={savedImages}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.memories}>
                                <Image source={item.image} style={styles.image} />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={numOfColumns}
                        contentContainerStyle={styles.memories}
                    />
                )}
                {modalVisible &&
                    <Modal visible={modalVisible} transparent>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.text2}>
                                    Do you want to save the selected images to the gallery?
                                </Text>
                                <Spacer height={heightPercentageToDP('2%')} />
                                <View style={styles.modalButtons}>
                                    <TouchableOpacity onPress={() => closeModal()}>
                                        <Text style={styles.tabText}>Cancel</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => handleSaveConfirmation()}>
                                        <Text style={styles.tabText}>Save</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                }
            </>
        );
    };

    // Render Header
    const renderHeader = () => {
        return (
            <>
                <Spacer height={heightPercentageToDP('5%')} />
                <View style={styles.header}>
                    <Spacer width={widthPercentageToDP('8%')} />
                    <TouchableOpacity onPress={() => goBack()} >
                        <Icon name="angle-left" size={25} color={theme.fontColors.black} style={styles.backIcon} />
                    </TouchableOpacity>
                    <Text style={styles.heading}>{strings.mileStone}</Text>
                    <Spacer width={widthPercentageToDP('28%')} />
                    <TouchableOpacity onPress={() => goBack()} >
                        <Icon name="bell-o" size={theme.fontSizes.mediumFontText} color={theme.fontColors.black} style={styles.backIcon} />
                    </TouchableOpacity>
                </View>
            </>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={["MILESTONE"]}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
        </SafeAreaView>
    );
};
export default MileStone
