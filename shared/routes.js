import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './container/App';
import IndexContainer from './container/IndexContainer/IndexContainer.jsx';
import SignInPage from './container/SignInPage/SignInPage.jsx';
import SignUpPage from './container/SignUpPage/SignUpPage.jsx';
import InfoPage from './container/SignUpPage/SignUpPage.jsx';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute component={IndexContainer}/>
        <Route path="signin" component={SignInPage}/>
        <Route path="signup" component={SignUpPage}/>
        <Route path="signup/confirm/:code" component={SignUpPage}/>

    </Route>
);

export default routes;
