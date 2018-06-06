import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch, Router } from 'react-router'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './container/home'
import reducer from './reducer'
// import history from './router'
// import registerServiceWorker from './registerServiceWorker';
const logMiddleware = ({getState, dispatch}) => next => action => {
  const pre = getState()
  console.log('%c pre state', 'color: #f00; font-size: 14px', pre)
  next(action)
  const nextState = getState()
  console.log('%c next state', 'color: #f00; font-size: 14px', nextState)
}
const store = applyMiddleware(logMiddleware)(createStore)(reducer)
const history = createHistory()
const Test = (props) =>
  <Provider store={store}>
    <Router history={history} location={history}>
      <Switch>
        <Route exact component={App} path='/' />
        <Route exact component={Home} path='/home' />
      </Switch>
    </Router>
  </Provider>

ReactDOM.render(<Test />, document.getElementById('root'))
