import {createStore, combineReducers} from 'redux';
import ToDoReducer from '../reducers/ToDoReducer';
import {create} from 'react-test-renderer';

const rootReducer = combineReducers({
  todos: ToDoReducer,
});

const todos = createStore(rootReducer);
export default todos;
