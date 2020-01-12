export const parks = (state = [], action) => {
  switch (action.type) {
    case "ADD_PARKS":
      return action.parks
    default:
      return state
  }
}
