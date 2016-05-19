import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import persistState from 'redux-localstorage'
import { browerHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'
import api from '../middleware/api'
import rootReducer from '../reducers'
import { paths, config } from '../config/localStorage'

const finalCreateStore = compose(
  applyMiddleware(routerMiddleware(browerHistory)),
  applyMiddleware(thunk, api),
  persistState(paths, config)
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(rootReducer, initialState)
}
