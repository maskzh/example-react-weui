import {
  CALL_API,
  PRODUCTS_REQUEST,
  PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_RESET,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
} from '../config/constants'
import { Schemas } from '../config/schemas'
import { ajax as fetch, getQueryParameters } from '../utils'

const PATH = 'product'
const defaultQuery = 'expand=category,supplier,content,tags,sales'

/* -------------- 商品列表 ----------- */
function fetchProducts(query) {
  const keyword = getQueryParameters(query).keyword || ''
  const endpoint = keyword ? `${PATH}/search?${query}` : `${PATH}?${query}`
  return {
    query,
    [CALL_API]: {
      types: [PRODUCTS_REQUEST, PRODUCTS_SUCCESS, PRODUCTS_FAILURE],
      endpoint: `${endpoint}&${defaultQuery}`,
      schema: Schemas.PRODUCT_ARRAY
    }
  }
}

// 加载商品列表
export function loadProducts(query, reload) {
  return (dispatch, getState) => {
    const {
      current = 0
    } = getState().pagination.productsByQuery[query] || {}

    if (current > 0 && !reload) {
      return null
    }

    return dispatch(fetchProducts(query))
  }
}

// 重置商品列表
export function resetProducts() {
  return (dispatch) => dispatch({
    type: PRODUCTS_RESET
  })
}

/* -------------- 具体商品 ----------- */
function fetchProduct(id, options) {
  return {
    [CALL_API]: {
      types: [PRODUCT_REQUEST, PRODUCT_SUCCESS, PRODUCT_FAILURE],
      endpoint: `${PATH}/${id}?${defaultQuery}`,
      schema: Schemas.PRODUCT,
      options
    }
  }
}

// 加载具体商品
export function loadProduct(id, requiredFields = []) {
  return (dispatch, getState) => {
    const product = getState().entities.products[id]
    // 如果 product 存在并且 product 需要的字段都有则返回 null
    if (product && requiredFields.every(key => product.hasOwnProperty(key))) {
      return null
    }
    return dispatch(fetchProduct(id))
  }
}

// 更新具体商品
export function updateProduct(id, body) {
  return (dispatch) => dispatch(fetchProduct(id, { method: 'put', body }))
}

// 删除具体商品---不走 mapDispatchToProps
export function deleteProduct(id) {
  return fetch(`/${PATH}/${id}`, { method: 'delete' })
}

// 删除具体商品---不走 mapDispatchToProps
export function insertProduct(body) {
  return fetch(`/${PATH}`, { method: 'post', body })
}
