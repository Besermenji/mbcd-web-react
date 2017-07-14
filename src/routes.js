import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App'
import Login from './components/auth/Login.react'
import Register from './components/auth/Register.react'
import Home from './components/home/Home.react'
import NotFound from './components/not_found/NotFound.react'

import {
  isAuthenticated
} from './helpers/auth'

const requireAuth = (nextState, replace) => {
  if (!isAuthenticated()) {
    replace({
      pathname: '/login'
    })
  }
}

const noAuth = (nextState, replace) => {
  if (isAuthenticated()) {
    replace({
      pathname: '/'
    })
  }
}
const Routes = (props) => (
  <Router {...props}>
    <Route path='/' component={App}>
      <Route onEnter={noAuth}>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Route>
      <Route onEnter={requireAuth}>
        <IndexRoute component={Home} />
        <Route path='/home' component={Home} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)
export default Routes
