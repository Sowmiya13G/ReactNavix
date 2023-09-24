import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {setNewsData, setLoading} from '../redux/actions/NewsAction';
import {globalStyles} from '../components/styles/styles';
const HomeScreen = () => {
  const newsData = useSelector(state => state.value.newsData);
  const loading = useSelector(state => state.value.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetchNewsData();
  }, [dispatch]);
  //Fetch data
  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        'https://newsdata.io/api/1/news?apikey=pub_299706fc754d2787e5d5e28874e6f6f377ecd&country=in&language=en&category=business,environment,health,science,technology',
      );
      const data = await response.json();
      dispatch(setNewsData(data.articles)); // Assuming the articles are in an "articles" array
    } catch (error) {
      console.error('Error fetching news data:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  if (loading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={(styles.container, globalStyles)}>
      <View style={styles.head}>
        <Text style={styles.heading}>Hey User,</Text>
        <Text style={styles.heading}>Here The Daily Updates</Text>
      </View>
      <FlatList
        data={newsData}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <View style={styles.body}>
            {item.urlToImage && (
              <Image source={{uri: item.urlToImage}} style={styles.newsImage} />
            )}
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    marginVertical: 20,
  },
  heading: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    padding: 16,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

// useEffect(() => {
//   // Check if news data is available in AsyncStorage
//   AsyncStorage.getItem('newsData')
//     .then(storeData => {
//       if (storeData) {
//         dispatch(setNewsData(JSON.parse(storeData)));
//         dispatch(setLoading(false));
//       } else {
//         fetch(apiURL)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Newtork response was not ok');
//             }
//             return response.json();
//           })
//           .then(data => {
//             dispatch(setNewsData(data.articles));
//             dispatch(setLoading(false));

//             AsyncStorage.setItem('newData', JSON.stringify(data.articles));
//           })
//           .catch(error => {
//             console.log('Error fetching data:', error);
//             dispatch(setLoading(false));
//           });
//       }
//     })
//     .catch(error => {
//       console.log('Error reading data from AsyncStorage:', error);
//     });
