import { combineReducers } from 'redux'
import { process } from './singleReducers/process'
import { user } from './singleReducers/user'
import { parks } from './singleReducers/parks'

const rootReducer = combineReducers({
  process,
  user,
  parks
})

export default rootReducer
