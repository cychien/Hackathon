import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import logger from 'redux-logger'
import rootReducer from 'reducers'
import api from 'middleware/api'

export default function configureStore (initialState, history) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancers = process.env.NODE_ENV === 'development'
    ? [routerMiddleware(history), thunk, api, logger]
    : [routerMiddleware(history), thunk, api]
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancer(applyMiddleware(...enhancers))
  )
  return store
}
