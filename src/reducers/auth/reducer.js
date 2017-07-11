import initialState from './initialState';
import * as actions from '../../constants/auth';

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.REGISTER:
    case actions.LOGIN:
      return {
        ...state,
        inProgress: true,
        error: ``,
      }

    case actions.REGISTER_SUCCESS:
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        inProgress: false
      }
    case actions.REGISTER_FAILURE:
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        inProgress: false,
        error: `error`,
      }
    default:
      return state;
  }
};

export default auth;
