import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch, Router } from 'react-router'
import './index.css'
import App from './App'
import reducer from './reducer'
// import registerServiceWorker from './registerServiceWorker';
// const element = (
//   <div>
//       hello<span>world!</span>
//   </div>
// )
const store = createStore(reducer)
const history = createHistory()
const Test = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exec component={App} path='/' />
        <Route exec component={App} path='/home' />
      </Switch>
    </Router>
  </Provider>
)

// ReactDOM.render(element, document.getElementById('root'))
ReactDOM.render(<Test />, document.getElementById('root'))
// registerServiceWorker();
// console.log(element)
