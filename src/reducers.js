import { combineReducers } from 'redux'

import home from 'components/home/duck/reducer'
import movie from 'components/home/duck/movieReducer'

export default combineReducers({
  home,
  movie,
})
