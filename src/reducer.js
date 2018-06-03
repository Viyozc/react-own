import { combineReducers } from 'redux'
import home from './reducer/home'
import { routerReducer } from 'react-router-redux'

// import { routerReducer } from 'react-router-redux'

export default combineReducers({
  routing: routerReducer,
  home
})
