export const user = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_USER_INFO':
      return {...state, ...action.info}
    default:
      return state
  }
}
