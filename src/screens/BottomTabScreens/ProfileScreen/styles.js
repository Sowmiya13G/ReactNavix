import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  title: {
    marginTop: 8,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
});
