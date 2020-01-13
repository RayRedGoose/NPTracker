export const selectedPark = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_PARK':
      return action.park
    default:
      return state
  }
}
