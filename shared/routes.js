import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import IndexContainer from './container/IndexContainer/IndexContainer.jsx'

const routes = (
  <Route path="/" component={App} >
    <IndexRoute component={IndexContainer} />

  </Route>
);

export default routes;
