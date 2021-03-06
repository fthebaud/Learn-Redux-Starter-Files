import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

// default data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

// let's create the store
const store = createStore(rootReducer, defaultState);

const history = syncHistoryWithStore(browserHistory, store);


export { history };

export default store;