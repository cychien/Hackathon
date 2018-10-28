import { handleActions } from 'redux-actions'
import moment from 'moment'
import convert from 'constants/convert'
import _ from 'lodash'

export const initState = {
  areaId: '3871759586433975',
  pm25Arr: [],
  humidityArr: [],
  tempArr: [],
  filterArr: [],

  pm25Avg: 0,
  humidityAvg: 0,
  tempAvg: 0,
  filterAvg: 0,

  isLoading: false,
  errors: [],
  queryWay: 'live',
  startTime: moment().subtract(1, 'days').toISOString(),
  endTime: moment().toISOString(),
  startHour: '00',
  startMin: '00',
  endHour: '00',
  endMin: '00',

  outData: 0,
  oneData: {}
}

export default handleActions({
  GET_ONE_DATA_REQUEST (state, action) {
    return {
     ...state
    }
  },
  GET_ONE_DATA_RECEIVE (state, action) {
    let aaa = {[action._pointer]: action.payload[0]}
    const level = convert(aaa[action._pointer].value)
    aaa[action._pointer].level = level
    return {
      ...state ,
      oneData: {...state.oneData, ...aaa}
     }
  },
  GET_ONE_DATA_FAILURE (state, action) {
    return {
      ...state 
     }
  },
  GET_OUT_DATA_REQUEST (state, action) {
    return {
      ...state,
      outData: {}
    }
  },
  GET_OUT_DATA_RECEIVE (state, action) {
    return {
      ...state,
      outData: action.payload
    }
  },
  GET_OUT_DATA_FAILURE (state, action) {
    return {
      ...state
    }
  },
  SET_START (state, action) {
    const time = action.payload.split(':')
    return {
      ...state,
      startHour: time[0],
      startMin: time[1]
    }
  },
  SET_END (state, action) {
    const time = action.payload.split(':')
    return {
      ...state,
      endHour: time[0],
      endMin: time[1]
    }
  },  
  SELECT_AREA (state, action) {
    return {
      ...state,
      areaId: action.payload,
      pm25Arr: [],
      humidityArr: [],
      tempArr: [],
      filterArr: []
    }
  },
  SWITCH_QUERY_WAY (state, action) {
    return {
      ...state,
      queryWay: action.payload,
      pm25Arr: [],
      humidityArr: [],
      tempArr: [],
      filterArr: []
    }
  },
  SET_START_TIME (state, action) {
    return {
      ...state,
      startTime: action.payload,
      pm25Arr: [],
      humidityArr: [],
      tempArr: [],
      filterArr: []
    }
  },
  SET_END_TIME (state, action) {
    return {
      ...state,
      endTime: action.payload,
      pm25Arr: [],
      humidityArr: [],
      tempArr: [],
      filterArr: []
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
  },
  GET_PERIOD_DATA_REQUEST (state, action) {
    return {
      ...state,
      isLoading: true
    }
  },
  GET_PERIOD_DATA_RECEIVE (state, action) {
    let pm25 = []
    let humidity = []
    let temp = []
    let filter = []
    let pm25Sum = 0
    let humiditySum = 0
    let tempSum = 0
    let filterSum = 0
    for (let i = 0; i < action.payload.length; i++) {
      if(action.payload[i].sid === 'pm2.5') {
        pm25.push(action.payload[i]) 
        pm25Sum = pm25Sum + Number(action.payload[i].value[0])
      }
      if(action.payload[i].sid === 'humidity') {
        humidity.push(action.payload[i])
        humiditySum = humiditySum + Number(action.payload[i].value[0])
      } 
      if(action.payload[i].sid === 'temperature') {
        temp.push(action.payload[i]) 
        tempSum = tempSum + Number(action.payload[i].value[0])
      }
      if(action.payload[i].sid === 'filter') {
        filter.push(action.payload[i])
        filterSum = filterSum + Number(action.payload[i].value[0])
      } 
    }

    return {
      ...state,
      pm25Arr: pm25,
      humidityArr: humidity,
      tempArr: temp,
      filterArr: filter,
      pm25Avg: (pm25Sum / pm25.length).toFixed(2),
      humidityAvg: (humiditySum / humidity.length).toFixed(2),
      tempAvg: (tempSum / temp.length).toFixed(2),
      filterAvg: (filterSum / filter.length).toFixed(2),
      isLoading: false
    }
  },
  GET_PERIOD_DATA_FAILURE (state, action) {
    return {
      ...state,
      isLoading: false,
      errors: [...state.errors]
    }
  }
}, initState)