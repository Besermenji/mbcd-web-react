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
        fromRegister: false,
        error: ``
      }

    case actions.REGISTER_SUCCESS:
      return {
        ...state,
        inProgress: false,
        fromRegister: true
      }
    case actions.LOGIN_SUCCESS:
      saveToken(action.payload.auth_token)
      return {
        ...state,
        inProgress: false
      }
    case actions.REGISTER_FAILURE:
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: action.payload.message
      }
    case actions.REMOVE_REGISTER_FLAG: {
      return {
        ...state,
        fromRegister: false
      }
    }
    default:
      return state
  }
}

export default auth
