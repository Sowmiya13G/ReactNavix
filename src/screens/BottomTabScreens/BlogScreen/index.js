/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    StatusBar,
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Image
} from 'react-native';
// Packages
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
// Constants
import theme from '../../../constants/theme';
import { strings } from '../../../constants/strings';
import commonImagePath from '../../../constants/images';
import blogsJSON from '../../../../blog.json'
// Styles
import { styles } from './styles';
import Spacer from '../../../components/Spacer';


export const BlogScreen = () => {
    const navigation = useNavigation()
    const [searchText, setSearchText] = useState('');
    const [filteredBlogs, setFilteredBlogs] = useState(blogsJSON.blogPost);
    const [searchQuery, setSearchQuery] = React.useState('');
    const goBack = () => {
        navigation.navigate('WebinarScreen');
      }
      const gotoNext =() =>{
        navigation.navigate('DashboardTab')
      }
    // Render UI .........................
    // Render Body
  const  renderBody = () => {
        return (
            <SafeAreaView style={styles.container}>
                {/* <ImageBackground source={commonImagePath.backgroundCurve} resizeMode="cover" style={styles.background} /> */}
                <FlatList
                    data={filteredBlogs.content}
                    renderItem={({ item }) => (
                        <View style={styles.blogItem}>
                            <Image source={commonImagePath.blog} style={styles.blogImage} />
                    <Spacer height={heightPercentageToDP('1%')} />
                            
                            <Text style={styles.blogTitle}>{item.sectionTitle}</Text>
                            
                            <Text style={styles.blogText}>{item.text}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        );

    };

    // Render Header
 const renderHeader = () => {
        return (
            <>
                <View style={styles.header}>
                    <View style={styles.icons}>
                        <Spacer height={heightPercentageToDP('10%')} />
                        <TouchableOpacity onPress={() => goBack()} style={styles.icon}>
                            <Icon name="angle-left" size={20} color={theme.fontColors.blueTheme} style={styles.backIcon} />
                        </TouchableOpacity>
                        <Text style={styles.heading}>{strings.blogs}</Text>
                        <Spacer width={widthPercentageToDP('35%')} />
                        <TouchableOpacity onPress={gotoNext()}>
                        <Icon name="volume-control-phone" size={30} color={theme.fontColors.white} style={styles.callIcon} />
                        </TouchableOpacity>
                        <Spacer width={widthPercentageToDP('5%')} />
                        <Icon name="filter" size={30} color={theme.fontColors.white} />
                    </View>
                    <Spacer height={heightPercentageToDP('2%')} />
                
                    <SearchBar
                        placeholder="Search Blogs..."
                        onClear={() => setSearchQuery('')}
                        onChangeText={(text) => {
                            setSearchText(text);
                            const filtered = blogsJSON.blogPost.content.filter((blog) =>
                                blog.sectionTitle.toLowerCase().includes(text.toLowerCase())
                            );
                            setFilteredBlogs({ ...blogsJSON.blogPost, content: filtered });
                        }}
                        searchIcon={{color: 'white', size: 30}}
                        placeholderTextColor={{color: 'white', size: 30}}
                        style={{color: 'white'}}
                        value={searchText}
                        containerStyle={styles.searchInput}
                        inputContainerStyle={{backgroundColor: 'transparent', alignItems: 'center', borderColor: 'transparent'}}
                    />

                </View>

            </>

        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={theme.backgroundColor.blueTheme} barStyle="light-content" />
            <FlatList
                data={['BLOGS']}
                renderItem={renderBody}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={renderHeader()}
            />
            
        </SafeAreaView>
    );

};
