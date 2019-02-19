import types from './types'

const setSpinAnimationState = () => ({
  type: types.TOGGLE_SPIN_ANIMATION,
})
const movieList = () => ({
  type: 'add',

})

export { setSpinAnimationState, movieList }
