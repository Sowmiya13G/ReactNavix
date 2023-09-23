import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers/Reducer';
import ToDoReducer from '../reducers/ToDoReducer';
import NewsReducer from '../reducers/NewsReducer';
const rootReducer = combineReducers({
  value: Reducer,
  todos: ToDoReducer,
  newData: NewsReducer,
  loading: NewsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
