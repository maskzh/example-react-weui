import { routeReducer as routing } from 'redux-simple-router'
import { combineReducers } from 'redux'
import { merge } from 'lodash'
import * as ActionTypes from '../config/constants'
import paginate from './paginate'
import crud from './crud'

// Updates an entity cache in response to any action with response.entities.
// 只要 action 中有 response.entities, 就更新 entities
function entities(state = {
  users: {},
}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}

// 错误信息
function errorMessage(state = null, action) {
  const { type, error } = action
  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }
  return state
}

// 数据请求相关，分页，加载状态等
const pagination = combineReducers({
  user: crud({
    types: [
      ActionTypes.USER_REQUEST,
      ActionTypes.USER_SUCCESS,
      ActionTypes.USER_FAILURE
    ]
  }),
  usersByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.USERS_REQUEST,
      ActionTypes.USERS_SUCCESS,
      ActionTypes.USERS_FAILURE
    ],
    resetType: ActionTypes.USERS_RESET
  }),
})

const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  routing
})

export default rootReducer
