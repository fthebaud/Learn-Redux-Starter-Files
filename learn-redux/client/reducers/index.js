// this is the root reducer

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import of the reducers
import posts from './posts';
import comments from './comments';


const rootReducer = combineReducers({posts, comments, routing: routerReducer});

export default rootReducer;