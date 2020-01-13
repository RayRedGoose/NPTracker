import { combineReducers } from 'redux'
import { process } from './singleReducers/process'
import { user } from './singleReducers/user'
import { parks } from './singleReducers/parks'
import { activeTab } from './singleReducers/activeTab'
import { selectedPark } from './singleReducers/selectedPark'
import { plannedParks } from './singleReducers/plannedParks'

const rootReducer = combineReducers({
  process,
  user,
  parks,
  activeTab,
  selectedPark,
  plannedParks
})

export default rootReducer
