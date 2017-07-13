import initialState from './initialState'
import * as actions from '../../constants/auth'
import {
  saveToken
} from '../../helpers/auth'

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER:
    case actions.LOGIN:
      return {
        ...state,
        inProgress: true,
        error: ``
      }

    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        inProgress: false
      }
    case actions.LOGIN_SUCCESS:
      saveToken(action.payload.auth_token)
      return {
        ...state,
        inProgress: false
      }
    case actions.REGISTER_FAILURE:
    case actions.LOGIN_FAILURE:
      console.log('action', action)
      return {
        ...state,
        inProgress: false,
        error: action.payload.message
      }
    default:
      return state
  }
}

export default auth
