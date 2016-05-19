import { merge, union } from 'lodash'
// Creates a reducer managing pagination, given the action types to handle,
// and a function telling how to extract the key from an action.
export function paginate({ types, mapActionToKey, resetType }) {
  return function handlePagination(state = {}, action) {
    // 预先处理非加载数据情况
    if (action.type === resetType) {
      return {}
    }

    // 验证参数
    if (!Array.isArray(types) || types.length !== 3) {
      throw new Error('Expected types to be an array of three elements.')
    }
    if (!types.every(t => typeof t === 'string')) {
      throw new Error('Expected types to be strings.')
    }
    if (typeof mapActionToKey !== 'function') {
      throw new Error('Expected mapActionToKey to be a function.')
    }

    // 定义具体类目的处理
    const [requestType, successType, failureType] = types
    function updatePagination(subState = {
      ids: [],
      loading: false,
      current: 1,
      total: 0,
      pageSize: 20,
    }, subAction) {
      switch (subAction.type) {
        case requestType:
          return merge({}, subState, {
            loading: true
          })
        case successType:
          return merge({}, subState, {
            loading: false,
            ids: union(subState.ids, subAction.response.result),
            current: subAction.response.current,
            total: subAction.response.total,
            pageSize: subAction.response.pageSize,
          })
        case failureType:
          return merge({}, subState, {
            loading: false
          })
        default:
          return subState
      }
    }

    // reducer switch 方法
    const key = mapActionToKey(action)
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.')
        }
        return merge({}, state, {
          [key]: updatePagination(state[key], action)
        })
      default:
        return state
    }
  }
}

export function crud({ types }) {
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
