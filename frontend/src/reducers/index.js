import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import bookmark from './bookmark';
import search from './search';

const rootReducer = combineReducers({
  routing: routerReducer,
  search,
  bookmark
});

export default rootReducer;
