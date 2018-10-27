import { createAction } from 'redux-actions'
import { CALL_API } from 'middleware/api'

export const selectArea = createAction('SELECT_AREA')

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