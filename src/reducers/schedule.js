import { handleActions } from 'redux-actions'

export const initState = [
  {
    room: "",
    people: null,
    date: "",
    time: ""
  }
]

export default handleActions({
  SUBMIT_FORM(state, actions) {
    state.push(actions.payload)
    const newState = [...state]
    return newState
  }
}, initState)