import { createAction } from 'redux-actions'
import { CALL_API } from 'middleware/api'

export const selectArea = createAction('SELECT_AREA')
export const switchQueryWay = createAction('SWITCH_QUERY_WAY')
export const setStartTime = createAction('SET_START_TIME')
export const setEndTime = createAction('SET_END_TIME')

export function getData (did) {
  return {
    [CALL_API]: {
      types: [
        'GET_DATA_REQUEST',
        'GET_DATA_RECEIVE',
        'GET_DATA_FAILURE'
      ],
      endpoint: `${did}`,
      method: 'GET',
      hasAuth: true
    }
  }
}

export function getPeriodData (did, startTime, endTime) {
  return {
    [CALL_API]: {
      types: [
        'GET_PERIOD_DATA_REQUEST',
        'GET_PERIOD_DATA_RECEIVE',
        'GET_PERIOD_DATA_FAILURE'
      ],
      endpoint: `${did}?start=${startTime}&end=${endTime} `,
      method: 'GET',
      hasAuth: true
    }
  }
}