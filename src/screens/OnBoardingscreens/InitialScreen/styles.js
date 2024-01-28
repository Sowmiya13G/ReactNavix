import {StyleSheet} from 'react-native';
import theme from '../../../constants/theme';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:theme.backgroundColor.saddleBrown
  },

  imageStyle: {
    width: 250,
    height: 250,
  },

  scrollView: {
    flex: 1,
  },

  wrapper: {
    top:0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#000',
    textTransform: 'uppercase',
  },
  paragraph: {
    fontSize: 16,
    color: '#000',
  },
  paginationWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 20,
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#000',
    margin: 5,
    marginBottom: 15,
  },
  completeButton: {
    color: '#fff',
    position: 'absolute',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 5,
    right: 5,
    // alignSelf: 'flex-end',
  },
  notification: {
   alignSelf:'flex-end',
    padding:'3%',
    backgroundColor:theme.backgroundColor.saddleBrown2,
    color: theme.fontColors.white,
    marginTop:'15%'
  },
  completeButtonText: {
    color: '#fff',
    right: 5,
    fontSize: 15,
    textAlign:'center'
  },
  icon: {
    fontSize: 15,
  },
});
