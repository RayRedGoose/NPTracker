import { combineReducers } from 'redux'
import { process } from './singleReducers/process'
import { user } from './singleReducers/user'

const rootReducer = combineReducers({
  process,
  user
})

export default rootReducer
