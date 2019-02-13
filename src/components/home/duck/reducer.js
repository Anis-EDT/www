import types from './types'

const initialState = { shouldSpin: false }

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_SPIN_ANIMATION:
      return {
        ...state,
        shouldSpin: !state.shouldSpin,
      }
    default:
      return state
  }
}
