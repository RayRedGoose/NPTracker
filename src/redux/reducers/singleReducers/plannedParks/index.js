export const plannedParks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLANNED_PARKS':
      return action.parks
    case 'ADD_PLANNED_PARK':
      return [...state, action.park]
    case 'REMOVE_PLANNED_PARK':
      return state.filter(park => park !== action.park)
    default:
      return state
  }
}
