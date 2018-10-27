import { handleActions } from 'redux-actions'

export const initState = {
  users: {},
  isLoading: false,
  errors: []
}

export default handleActions({
  GET_USERS_REQUEST (state, action) {
    return {
      users: {},
      isLoading: true,
      errors: []
    }
  },
  GET_USERS_RECEIVE (state, action) {
    return {
      ...state,
      users: action.payload,
      isLoading: false
    }
  },
  GET_USERS_FAILURE (state, action) {
    return {
      ...state,
      isLoading: false,
      errors: [...state.errors]
    }
  }
}, initState)
