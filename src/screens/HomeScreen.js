import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {setNewsData, setLoading} from '../redux/actions/NewsAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const newsData = useSelector(state => state.value.newsData);
  const loading = useSelector(state => state.value.loading);
  const dispatch = useDispatch();
  const [isRefreshing, setIsRefreshing] = useState(false);

  //Fetch data
  const fetchData = async () => {
    const apiURl =
      'https://newsapi.org/v2/everything?q=tesla&from=2023-08-22&sortBy=publishedAt&apiKey=9beb24de34a14c59a90266af79eb09d6';

    try {
      const response = await fetch(apiURl);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setNewsData(data.articles));

      //Store news data in AsyncStorage
      await AsyncStorage.setItem('newData', JSON.stringify(data.articles));
    } catch (error) {
      console.log('Error fetching data:', error);
    } finally {
      dispatch(setLoading(false));
      setIsRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await fetchData();
  };

  useEffect(() => {
    setLoading(true);
    // Check if news data is available in AsyncStorage
    AsyncStorage.getItem('newsData')
      .then(storeData => {
        if (storeData) {
          dispatch(setNewsData(JSON.parse(storeData)));
        }
      })
      .catch(error => {
        console.log('Error reading data from AsyncStorage:', error);
      })
      .finally(() => {
        fetchData(); // Always fetch fresh data to update even if stored data is available
      });
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
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
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
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
    color: '#000',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  body: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    padding: 16,
  },
  newsImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: 'black',
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
//         fetch(apiURl)
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
