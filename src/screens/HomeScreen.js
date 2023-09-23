import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';

const HomeScreen = () => {
  const [newsData, setNewsData] = useState('');
  const [loading, setLoading] = useState('');

  useEffect(() => {
    const apiURl =
      'https://newsapi.org/v2/everything?q=tesla&from=2023-08-22&sortBy=publishedAt&apiKey=9beb24de34a14c59a90266af79eb09d6';

    //Fetch data
    fetch(apiURl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Newtork response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setNewsData(data.articles);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
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
