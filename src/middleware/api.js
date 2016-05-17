import { normalize } from 'normalizr'
import { camelizeKeys } from 'humps'
import { CALL_API } from '../config/constants'
import { ajax as fetch } from '../utils'
import { assign } from 'lodash'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(endpoint, schema, options) {
  const fullUrl = `/${endpoint.replace(/^\//, '')}`
  return fetch(fullUrl, options).then((json) => {
    if (json.data.items) {
      const camelizedJson = camelizeKeys(json.data.items)
      return assign({}, normalize(camelizedJson, schema),
        {
          current: json.data._meta.currentPage,
          total: json.data._meta.totalCount,
          pageSize: json.data._meta.perPage
        }
      )
    }
    const camelizedJson = camelizeKeys(json.data)
    return assign({}, normalize(camelizedJson, schema))
  })
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types, options } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  function actionWith(data) {
    const finalAction = assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint, schema, options).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
