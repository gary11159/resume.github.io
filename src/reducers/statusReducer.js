const initialState = {
  ingTabName: 'intro'
}

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TABNAME":
      return {
        ...state,
        ingTabName: action.value
      }

    default:
      return state
  }
}

export default statusReducer