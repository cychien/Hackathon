import { handleActions } from 'redux-actions'

export const initState = {
  id: undefined,
  accessToken: undefined
}

export default handleActions({
  DO (state, action) {
    return { ...state }
  }

}, initState)
