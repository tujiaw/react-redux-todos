const visibleFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
    case 'SET_VISIBLE':
      return action.filter
    default:
      return state
  }
}

export default visibleFilter