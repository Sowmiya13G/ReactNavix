import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  fields: {
    width: '80%',
    marginBottom: 15,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    marginBottom: 15,
    left: 0,
    color: '#fff',
  },
  option: {
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  optionText: {
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'transperant',
  },
});
