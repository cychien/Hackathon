import { handleActions } from 'redux-actions'

export const initState = {
  areaId: '3871759586433975',
  pm25Arr: [],
  humidityArr: [],
  tempArr: [],
  filterArr: [],
  isLoading: false,
  errors: []
}

export default handleActions({
  SELECT_AREA (state, action) {
    return {
      ...state,
      areaId: action.payload
    }
  },
  GET_DATA_REQUEST (state, action) {
    return {
      ...state,
      isLoading: true
    }
  },
  GET_DATA_RECEIVE (state, action) {
    return {
      ...state,
      pm25Arr: [...state.pm25Arr, action.payload[0]],
      humidityArr: [...state.humidityArr, action.payload[1]],
      tempArr: [...state.tempArr, action.payload[2]],
      filterArr: [...state.filterArr, action.payload[3]],
      isLoading: false
    }
  },
  GET_DATA_FAILURE (state, action) {
    return {
      ...state,
      isLoading: false,
      errors: [...state.errors]
    }
  }
}, initState)