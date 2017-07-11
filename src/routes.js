import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Login from './components/auth/Login.react';
import Register from './components/auth/Register.react';

import NotFound from './components/not_found/NotFound.react';

const Routes = (props) => (
 <Router {...props}>
   <Route path="/" component={App}>
     <Route path="/login" component={Login} />
     <Route path="/register" component={Register} />
     <Route path="*" component={NotFound} />
   </Route>
 </Router>
);
export default Routes;
