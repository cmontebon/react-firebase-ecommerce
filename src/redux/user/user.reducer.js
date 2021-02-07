import UserActionTypes from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case UserActionTypes.GOOGLE_SIGN_IN_START:
      case UserActionTypes.EMAIL_SIGN_IN_START:
        return {
          ...state,
          isLoading: true,
        }
      case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          currentUser: action.payload,
        }
      case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
      case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      case UserActionTypes.SET_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload
        }
      default:
        return state
    }
}

export default userReducer;