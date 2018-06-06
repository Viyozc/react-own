
function createStore (reducer, preloadedState, enhance) {
  let currentReducer = reducer
  let currentState = preloadedState
  let currentListeners = []
  let nextListeners = currentListeners
  let isDispatching = false

  function getState () {
    if (isDispatching) throw new Error('is dispatching')
    return currentState
  }
  function subscribe (listener) {
    if (isDispatching) throw new Error('is dispatching')
    let isSubscribed = true
    nextListeners.push(listener)
    return function unSubscribe () {
      if (!isSubscribed) return
      if (isDispatching) throw new Error('is dispatching')
      isSubscribed = false
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
    }
  }

  function dispatch (action) {
    if (!action.type) throw new Error('no type action')
    if (isDispatching) throw new Error('is dispatching')
    try {
      isDispatching = true
      currentState = currentReducer(currentState, action)
    } finally {
      isDispatching = false
    }
    let listeners = currentListeners = nextListeners
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]()
    }
    return action
  }

  function replaceReducer (nextReducer) {
    currentReducer = nextReducer
    dispatch({type: 'REPLACE_REDUCER'})
  }

  dispatch({type: 'REDUCER_INIT'})

  return {
    getState,
    dispatch,
    replaceReducer,
    subscribe
  }
}

function bindActionCreator (actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments))
  }
}

function bindActionCreators (actionCreators, dispatch) {
  const keys = Object.keys(actionCreators)
  let boundActionCreators = {}
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    let actionCreator = actionCreators[key]
    boundActionCreators[i] = bindActionCreator(actionCreator, dispatch)
  }
  return boundActionCreators
}

function combineReducers (reducers) {
  const reducerKeys = Object.keys(reducers)
  const finalReducers = {}
  for (let i = 0; i < reducerKeys.length; i++) {
    let key = reducerKeys[i]
    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducersKeys = Object.keys(finalReducers)
  return function combination (state = {}, action) {
    let hasChanged = false
    const nextState = {}
    for (let i = 0; i < finalReducersKeys.length; i++) {
      const key = finalReducersKeys[i]
      const reducer = finalReducers[key]
      const preStateAtKey = state[key]
      const nextStateAtKey = reducer(preStateAtKey, action)
      nextState[key] = nextStateAtKey
      if (preStateAtKey !== nextStateAtKey) {
        hasChanged = true
      }
      return hasChanged ? nextState : state
    }
  }
}

function compose (...funcs) {
  if (funcs.length === 0) { return fu => fu }
  if (funcs.length === 1) return funcs[0]
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

function applyMiddleware (...middlewares) {
  return (createStore) => (reducer, preloadedState, enhancer) => {
    let store = createStore(reducer, preloadedState, enhancer)
    let dispatch = store.dispatch
    let chain = []

    let middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}

export {
  compose,
  combineReducers,
  createStore,
  bindActionCreators,
  applyMiddleware
}

export default {
  compose,
  combineReducers,
  createStore,
  bindActionCreators,
  applyMiddleware
}
