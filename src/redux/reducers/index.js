import { combineReducers } from 'redux'
import { process } from './singleReducers/process'
import { user } from './singleReducers/user'
import { parks } from './singleReducers/parks'
import { activeTab } from './singleReducers/activeTab'

const rootReducer = combineReducers({
  process,
  user,
  parks,
  activeTab
})

export default rootReducer
