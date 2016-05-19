import { merge } from 'lodash'

// 只要 action 中有 response.entities, 就更新 entities
export default function entities(state = {
  users: {},
}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }
  return state
}
