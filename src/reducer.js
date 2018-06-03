import { combineReducers } from 'redux'
import home from './container/home/reducer'
import { routerReducer } from 'react-router-redux'

// import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer,
  home
})
