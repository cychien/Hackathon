import { createAction } from 'redux-actions'
import { CALL_API } from 'middleware/api'
import moment from 'moment'

export const selectArea = createAction('SELECT_AREA')
export const switchQueryWay = createAction('SWITCH_QUERY_WAY')
export const setStartTime = createAction('SET_START_TIME')
export const setEndTime = createAction('SET_END_TIME')
export const setStart = createAction('SET_START')
export const setEnd = createAction('SET_END')

export const getAllData = () => (dispatch, getState) => {
  let p1 = dispatch(getOneData('3871759586433975', '101-1'))
  let p2 = dispatch(getOneData('7597082504332382', '101-2'))
  let p3 = dispatch(getOneData('9764105931662322', '101-3'))
  let p4 = dispatch(getOneData('8804079393699702', '102-1'))
  let p5 = dispatch(getOneData('1455445439725327', '102-2'))
  let p6 = dispatch(getOneData('6731555941266026', '103-1'))
  let p7 = dispatch(getOneData('4812485734855428', '103-2'))
  let p8 = dispatch(getOneData('7613225542498681', '808-1'))
  let p9 = dispatch(getOneData('8027710478625989', '808-2'))
  let p10 = dispatch(getOneData('4199360688150130', '808-3'))
  let p11 = dispatch(getOneData('0694317100256465', '14-1'))
  let p12 = dispatch(getOneData('2572728355120093', '14-2'))
  let p13 = dispatch(getOneData('7507049124919002', '14-3'))
  return Promise.all([p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13])
    .then(action => {})
    .catch(err => {})
}

export function getOneData (did, _pointer) {
  return {
    [CALL_API]: {
      types: [
        'GET_ONE_DATA_REQUEST',
        'GET_ONE_DATA_RECEIVE',
        'GET_ONE_DATA_FAILURE'
      ],
      endpoint: `${did}/pm2.5?limit=1&sort=-time`,
      method: 'GET',
      _pointer,
      hasAuth: true
    }
  }
}




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

export function getOutData ({sd, ed}) {
  const nsd = moment(sd)
  const ned = moment(ed)
  const start = `${nsd.year()}/${nsd.hour()}/${nsd.date()}+${nsd.format('HH')}:00`
  const end = `${ned.year()}/${ned.hour()}/${ned.date()}+${ned.format('HH')}:00`

  return {
    [CALL_API]: {
      types: [
        'GET_OUT_DATA_REQUEST',
        'GET_OUT_DATA_RECEIVE',
        'GET_OUT_DATA_FAILURE'
      ],
      endpoint: 'https://taqm.epa.gov.tw/taqm/aqs.ashx?act=txrChart&s=15&p=33&sd=2018%2F10%2F27+08%3A00&ed=2018%2F10%2F28+10%3A00&src=epa',
      method: 'GET'
    }
  }
}