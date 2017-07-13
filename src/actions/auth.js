import { CALL_API } from 'redux-api-middleware'
import * as actions from '../constants/auth.js'

export const login = (data) => ({
  [CALL_API]: {
    types: [actions.LOGIN, actions.LOGIN_SUCCESS, actions.LOGIN_FAILURE],
    endpoint: 'http://localhost:3010/v1/auth_user',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
})

export const register = (data) => ({
  [CALL_API]: {
    types: [actions.REGISTER, actions.REGISTER_SUCCESS, actions.REGISTER_FAILURE],
    endpoint: 'http://localhost:3010/v1/users',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }
})
