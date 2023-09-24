import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducers/Reducer';
import ToDoReducer from '../reducers/ToDoReducer';
import NewsReducer from '../reducers/NewsReducer';
import BotReducer from '../reducers/BotReducer';
const rootReducer = combineReducers({
  value: Reducer,
  todos: ToDoReducer,
  newData: NewsReducer,
  loading: NewsReducer,
  chat: BotReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
