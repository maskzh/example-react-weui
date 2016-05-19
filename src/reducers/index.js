import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import entities from './entities'
import errorMessage from './errorMessage'
import pagination from './pagination'

const rootReducer = combineReducers({
  routing,
  entities,
  errorMessage,
  pagination
})

export default rootReducer
