import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import auth from './auth/reducer'

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth
})
export default rootReducer
