import {StyleSheet} from 'react-native';
import theme from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  indexContainer: {
    backgroundColor: theme.backgroundColor.saddleBrown4,
    borderRadius: 12,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  index: {
    color: theme.fontColors.white,
    fontSize: 20,
  },
  taskContainer: {
    backgroundColor: theme.backgroundColor.saddleBrown,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: theme.fontColors.white,
    width: '90%',
    fontSize: 16,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2%',
  },
  button: {
    marginLeft: '8%',
  },
});
