import { createAction } from 'redux-actions'
import { CALL_API } from 'middleware/api'

export const unauthorized = createAction('UNAUTHORIZED')

export function getUsers () {
  return {
    [CALL_API]: {
      types: [
        'GET_USERS_REQUEST',
        'GET_USERS_RECEIVE',
        'GET_USERS_FAILURE'
      ],
      endpoint: `users`,
      method: 'GET',
      hasAuth: true
    }
  }
}