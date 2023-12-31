import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === 'android' ? 0 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  details: {
    marginTop: '3%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
    width: '90%',
  },
  headerIcon: {
    opacity: 0.7,
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    display: 'flex',
    width: '100%',
    marginTop: 20,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#5B5B5B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  name: {
    marginTop: 10,
    fontSize: 35,
    color: '#000',
    fontWeight: 'bold',
  },

  title: {
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#000',
  },
  mobileNumber: {
    display: 'flex',
    width: '100%',
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 20,
    borderColor: '#5B5B5B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  mobileNumberText: {
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 25,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  icon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#007FFF',
    borderColor: '#007FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 2,
    marginBottom: 20,
    width: '90%',
    height: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
});
