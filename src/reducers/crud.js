// 处理加载 具体实体 或者修改具体实体的 reducer
// 因为加载和修改会更新实体树，所以要走 reducer
// 目前仅处理 loading 状态
import { merge } from 'lodash'
// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export default function crud({ types }) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.')
  }
  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.')
  }

  const [requestType, successType, failureType] = types

  return function updateCrud(state = {
    loading: false
  }, action) {
    switch (action.type) {
      case requestType:
        return merge({}, state, {
          loading: true
        })
      case successType:
        return merge({}, state, {
          loading: false
        })
      case failureType:
        return merge({}, state, {
          loading: false
        })
      default:
        return state
    }
  }
}
