export const process = (state = null, action) => {
  switch (action.type) {
    case 'ADD_PROCESS_NAME':
      return {...state, name: action.name}
    case 'ADD_PROCESS_STEP':
      return {...state, step: action.step}
    case 'INCREASE_STEP':
      return {...state, step: state.step + 1}
    default:
      return state
  }
}
