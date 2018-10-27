import { combineReducers } from 'redux'
import user from './users'
import main from './main'
import schedule from './schedule';

export default combineReducers({
  user,
  main,
  schedule
})
