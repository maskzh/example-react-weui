import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'
import DevTools from '../containers/Root/DevTools'
import api from '../middleware/api'
import rootReducer from '../reducers'
import { paths, config } from '../config/localStorage'

const reduxRouterMiddleware = syncHistory(browserHistory)
const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  applyMiddleware(reduxRouterMiddleware),
  persistState(paths, config),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

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
