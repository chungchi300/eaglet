import { combineReducers } from 'redux'

import counter from 'reducers/counter'
import author from 'reducers/author'
export default combineReducers({
  author,
  counter
})
