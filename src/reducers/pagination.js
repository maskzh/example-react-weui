import { combineReducers } from 'redux'
import * as ActionTypes from '../config/constants'
import paginate from './paginate'

const pagination = combineReducers({
  users: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.USERS_REQUEST,
      ActionTypes.USERS_SUCCESS,
      ActionTypes.USERS_FAILURE
    ],
    resetType: ActionTypes.USERS_RESET
  }),
})

export default pagination
