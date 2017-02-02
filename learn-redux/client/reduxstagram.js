import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute } from 'react-router';

// package that allows binding between react and redux
import { Provider } from 'react-redux';
// import of the store
import store, { history } from './store';

// css (webpack will take care of the css loading for us and embed it in the js)
import './styles/style.styl';

// import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';


const NotFound = () => (<p>NOT FOUND</p>);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
        <Route path="*" component={NotFound}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
