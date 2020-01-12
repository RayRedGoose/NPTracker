export const activeTab = (state = 1, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
      return action.id
    default:
      return state
  }
}
