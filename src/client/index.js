// Client Entry: index.js

import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from 'store'
import { createBrowserHistory } from 'history'
import App from 'App'

const initialState = {}
const history = createBrowserHistory()
const store = configureStore(initialState, history)

ReactDOM.render(<App history={history} store={store} />,
  document.getElementById('root')
)
