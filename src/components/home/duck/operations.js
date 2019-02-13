import { setSpinAnimationState } from './actions'

const toggleSpinAnimation = () => (dispatch) => {
  dispatch(setSpinAnimationState())
}

export { toggleSpinAnimation }
