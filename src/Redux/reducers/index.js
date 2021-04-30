import { combineReducers } from 'redux'
import currentTags from './currentTags'
import dreams from './dreams'


export default combineReducers({
    currentTags,
    dreams
  })