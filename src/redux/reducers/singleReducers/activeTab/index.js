export const activeTab = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_ACTIVE_TAB':
      return action.id
    default:
      return state
  }
}
