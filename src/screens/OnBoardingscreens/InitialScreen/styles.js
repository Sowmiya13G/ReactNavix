import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  imageStyle: {
    width: 200,
    height: 200,
  },

  scrollView: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#000',
  },
  paragraph: {
    fontSize: 16,
    color: '#000',
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    margin: 5,
  },
  // imageStyle: {
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height,
  // },
});
