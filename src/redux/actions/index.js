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

export const addUserInfo = info => ({
  type: 'ADD_USER_INFO',
  info
})
