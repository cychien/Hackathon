import { combineReducers } from 'redux'
import user from './users'
import main from './main'

export default combineReducers({
  user,
  main
})
