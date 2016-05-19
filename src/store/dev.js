import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'
import { hashHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import api from '../middleware/api'
import rootReducer from '../reducers'
import { paths, config } from '../config/localStorage'

const finalCreateStore = compose(
  applyMiddleware(routerMiddleware(hashHistory)),
  applyMiddleware(thunk, api),
  persistState(paths, config),
  applyMiddleware(createLogger()),
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  window.store = store

  return store
}
