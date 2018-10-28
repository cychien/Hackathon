import { CALL_API } from 'middleware/api'
import device from 'constants/device'

export const getAllData = () => (dispatch, getState) => {
  const dispatchMaker = (did) => {
    return dispatch(getData(did))
  }
  console.log(dispatchMaker('123'));
  const allDispatch = Object.values(device).map(value => dispatchMaker(value))
  
  return Promise.all(allDispatch)
    .then(res => console.log(res))
    // .catch()
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