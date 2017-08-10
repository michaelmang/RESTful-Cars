//define the initial state
const initialState = {
  id: ""
}

//define a reducer with an intitalized state and logic to handle action
function RestfulCarsApp(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_ID':
      const id = Object.assign({}, state, {
        id: action.id
      })
      return id
    default:
      return state
  }
}

export default RestfulCarsApp
