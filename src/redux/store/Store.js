import {createStore, combineReducers} from 'redux';
import Reducer from '../reducers/Reducer';
import ToDoReducer from '../reducers/ToDoReducer';

const rootReducer = combineReducers({
  value: Reducer,
  todos: ToDoReducer,
});

const store = createStore(rootReducer);
export default store;
