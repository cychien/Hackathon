import fetch from 'isomorphic-fetch'
import humps from 'humps'
import { unauthorized } from 'actions/user'

import { API_URL } from 'config'

require('es6-promise').polyfill()

export const CALL_API = Symbol('CALL_API')

function _checkStatus (response) {
  if (response.status >= 200 && response.status < 300) return response
  if (response.status === 400 || response.status === 500) return response
  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function _parseJSON (response) {
  return response.text()
    .then(body => {
      try {
        return JSON.parse(body)
      } catch (e) {
        return { error: 'ERROR', message: body }
      }
    })
}

function giveFullUrl (endpoint) {
  if (endpoint.indexOf('http://') !== -1 || (endpoint.indexOf('https://') !== -1)) { return endpoint }

  return (endpoint.indexOf(API_URL) === -1)
    ? `${API_URL}/${endpoint}`
    : endpoint
}

export default store => next => action => {
  if (!action[CALL_API]) return next(action)

  const callAPI = action[CALL_API]
  const { _pointer, method, headers, endpoint, body, upload, types, shouldNeedAuth } = callAPI
  const [requestType, receiveType, failureType] = types
  const { dispatch, getState } = store
  const accessToken = getState().user.accessToken

  dispatch({ type: requestType, payload: body, _pointer })

  const fullUrl = giveFullUrl(endpoint)
  let options = {
    method,
    headers: {
      ...headers,
      Accept: 'application/json; charset=UTF-8'
    }
  }

  if (body && (
    method.toUpperCase() === 'POST' ||
    method.toUpperCase() === 'PATCH' ||
    method.toUpperCase() === 'PUT' ||
    method.toUpperCase() === 'DELETE')) {
    options = { ...options,
      headers: { ...options.headers,
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(body)
    }
  }

  if (upload && (
    method.toUpperCase() === 'POST' ||
    method.toUpperCase() === 'PATCH' ||
    method.toUpperCase() === 'PUT')) {
    options = { ...options,
      headers: { ...options.headers },
      body: upload
    }
  }

  if (shouldNeedAuth && accessToken) {
    options = { ...options,
      headers: { ...options.headers,
        Authorization: `Bearer ${accessToken}`
      }
    }
  }

  return fetch(fullUrl, options)
    .then(_checkStatus)
    .then(_parseJSON)
    .then(payload =>
      dispatch({
        type: (payload.error) ? failureType : receiveType,
        payload: humps.camelizeKeys(payload),
        _pointer
      })
    )
    .catch(err => {
      if (err.response && err.response.status === 401) {
        dispatch(unauthorized())
      } else {
        dispatch({
          type: failureType,
          payload: { error: 'ERROR', message: 'Something Error.' },
          _pointer
        })
      }
    })
}
