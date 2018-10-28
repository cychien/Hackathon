import { handleActions } from 'redux-actions'
import device from 'constants/device';

export const initialState = Object.keys(device).map(key => ({[key]: []}))

export default handleActions({
  GET_DATA_REQUEST (state, action) {
    return {
      ...state,
      isLoading: true
    }
  },
  GET_DATA_RECEIVE (state, action) {
    console.log(action);
    return {
      ...state,
    }
  },
  GET_DATA_FAILURE (state, action) {
    return {
      ...state,
      isLoading: false,
      errors: [...state.errors]
    }
  },
}, initialState)