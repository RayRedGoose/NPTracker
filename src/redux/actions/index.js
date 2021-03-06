export const addProcessName = name => ({
  type: 'ADD_PROCESS_NAME',
  name
})

export const addProcessStep = step => ({
  type: 'ADD_PROCESS_STEP',
  step
})

export const increaseStep = () => ({
  type: 'INCREASE_STEP'
})

export const addProcessQuery = query => ({
  type: 'ADD_PROCESS_QUERY',
  query
})

export const removeProcess = () => ({
  type: 'REMOVE_PROCESS'
})

export const addUserInfo = info => ({
  type: 'ADD_USER_INFO',
  info
})

export const addParks = parks => ({
  type: 'ADD_PARKS',
  parks
})

export const changeActiveTab = id => ({
  type: 'CHANGE_ACTIVE_TAB',
  id
})

export const selectPark = park => ({
  type: 'SELECT_PARK',
  park
})

export const addPlannedParks = parks => ({
  type: 'ADD_PLANNED_PARKS',
  parks
})

export const addPlannedPark = park => ({
  type: 'ADD_PLANNED_PARK',
  park
})

export const removePlannedPark = park => ({
  type: 'REMOVE_PLANNED_PARK',
  park
})
