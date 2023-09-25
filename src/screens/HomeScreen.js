import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchNewsRequest} from '../redux/actions/NewsAction';
import {globalStyles} from '../components/styles/styles';
const HomeScreen = ({news, loading, fetchNews}) => {
  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={(styles.container, globalStyles)}>
      <View style={styles.head}>
        <Text style={styles.heading}>Hey User,</Text>
        <Text style={styles.heading}>Here The Daily Updates</Text>
      </View>
      <FlatList
        data={news}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Image
              source={{uri: item.image_url}}
              style={{width: 100, height: 100}}
            />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};
const mapStateToProps = state => ({
  news: state.news.news,
  loading: state.news.loading,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchNews: fetchNewsRequest,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
