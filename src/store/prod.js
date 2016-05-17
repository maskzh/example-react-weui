import { createStore, applyMiddleware, compose } from 'redux'
import { hashHistory } from 'react-router'
// import { browserHistory } from 'react-router'
import { syncHistory } from 'redux-simple-router'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'
import { paths, config } from '../config/localStorage'

const finalCreateStore = compose(
  applyMiddleware(thunk, api),
  applyMiddleware(syncHistory(hashHistory)),
  persistState(paths, config)
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
