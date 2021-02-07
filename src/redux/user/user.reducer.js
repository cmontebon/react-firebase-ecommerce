import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case UserActionTypes.SIGN_OUT_START:
      case UserActionTypes.GOOGLE_SIGN_IN_START:
      case UserActionTypes.EMAIL_SIGN_IN_START:
        return {
          ...state,
          isLoading: true,
        }
      case UserActionTypes.SIGN_OUT_SUCCESS:
        return {
          ...state,
          isLoading: false,
          currentUser: null
        }
      case UserActionTypes.SIGN_IN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          currentUser: action.payload,
        }
      case UserActionTypes.SIGN_OUT_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      case UserActionTypes.SIGN_IN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      default:
        return state
    }
}

export default userReducer;