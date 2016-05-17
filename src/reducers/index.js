import { routeReducer as routing } from 'redux-simple-router'
import { combineReducers } from 'redux'
import { merge, assign } from 'lodash'
import * as ActionTypes from '../config/constants'
import paginate from './paginate'
import crud from './crud'
import makeForm from './form'


function menu(state = {
  current: 'home',
  openKeys: []
}, action) {
  if (action.type === ActionTypes.MENU_UPDATE) {
    return assign({}, state, action.menu)
  }
  return state
}

function oper(state = {}, action) {
  if (action.type === ActionTypes.LOGIN_SUCCESS) {
    return assign({}, state, action.oper)
  }
  return state
}

// Updates an entity cache in response to any action with response.entities.
// 只要 action 中有 response.entities, 就更新 entities
function entities(state = {
  users: {},
  products: {},
  suppliers: {},
  agents: {},
  orders: {},
  newss: {},
  clients: {},
  productCategories: {},
  productTags: {},
  newsCategories: {},
  saleProducts: {},
  intentProducts: {},
  bnewss: {}
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
  client: crud({
    types: [
      ActionTypes.CLIENT_REQUEST,
      ActionTypes.CLIENT_SUCCESS,
      ActionTypes.CLIENT_FAILURE
    ]
  }),
  clientsByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.CLIENTS_REQUEST,
      ActionTypes.CLIENTS_SUCCESS,
      ActionTypes.CLIENTS_FAILURE
    ],
    resetType: ActionTypes.CLIENTS_RESET
  }),
  order: crud({
    types: [
      ActionTypes.ORDER_REQUEST,
      ActionTypes.ORDER_SUCCESS,
      ActionTypes.ORDER_FAILURE
    ]
  }),
  ordersByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.ORDERS_REQUEST,
      ActionTypes.ORDERS_SUCCESS,
      ActionTypes.ORDERS_FAILURE
    ],
    resetType: ActionTypes.ORDERS_RESET
  }),
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
  agent: crud({
    types: [
      ActionTypes.AGENT_REQUEST,
      ActionTypes.AGENT_SUCCESS,
      ActionTypes.AGENT_FAILURE
    ]
  }),
  agentsByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.AGENTS_REQUEST,
      ActionTypes.AGENTS_SUCCESS,
      ActionTypes.AGENTS_FAILURE
    ],
    resetType: ActionTypes.AGENTS_RESET
  }),
  supplier: crud({
    types: [
      ActionTypes.SUPPLIER_REQUEST,
      ActionTypes.SUPPLIER_SUCCESS,
      ActionTypes.SUPPLIER_FAILURE
    ]
  }),
  suppliersByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.SUPPLIERS_REQUEST,
      ActionTypes.SUPPLIERS_SUCCESS,
      ActionTypes.SUPPLIERS_FAILURE
    ],
    resetType: ActionTypes.SUPPLIERS_RESET
  }),
  product: crud({
    types: [
      ActionTypes.PRODUCT_REQUEST,
      ActionTypes.PRODUCT_SUCCESS,
      ActionTypes.PRODUCT_FAILURE
    ]
  }),
  productsByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.PRODUCTS_REQUEST,
      ActionTypes.PRODUCTS_SUCCESS,
      ActionTypes.PRODUCTS_FAILURE
    ],
    resetType: ActionTypes.PRODUCTS_RESET
  }),
  news: crud({
    types: [
      ActionTypes.NEWS_REQUEST,
      ActionTypes.NEWS_SUCCESS,
      ActionTypes.NEWS_FAILURE
    ]
  }),
  newssByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.NEWSS_REQUEST,
      ActionTypes.NEWSS_SUCCESS,
      ActionTypes.NEWSS_FAILURE
    ],
    resetType: ActionTypes.NEWSS_RESET
  }),
  productCategory: crud({
    types: [
      ActionTypes.PRODUCT_CATEGORY_REQUEST,
      ActionTypes.PRODUCT_CATEGORY_SUCCESS,
      ActionTypes.PRODUCT_CATEGORY_FAILURE
    ]
  }),
  productCategoriesByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.PRODUCT_CATEGORIES_REQUEST,
      ActionTypes.PRODUCT_CATEGORIES_SUCCESS,
      ActionTypes.PRODUCT_CATEGORIES_FAILURE
    ],
    resetType: ActionTypes.PRODUCT_CATEGORIES_RESET
  }),
  newsCategory: crud({
    types: [
      ActionTypes.NEWS_CATEGORY_REQUEST,
      ActionTypes.NEWS_CATEGORY_SUCCESS,
      ActionTypes.NEWS_CATEGORY_FAILURE
    ]
  }),
  newsCategoriesByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.NEWS_CATEGORIES_REQUEST,
      ActionTypes.NEWS_CATEGORIES_SUCCESS,
      ActionTypes.NEWS_CATEGORIES_FAILURE
    ],
    resetType: ActionTypes.NEWS_CATEGORIES_RESET
  }),

  productTag: crud({
    types: [
      ActionTypes.PRODUCT_TAG_REQUEST,
      ActionTypes.PRODUCT_TAG_SUCCESS,
      ActionTypes.PRODUCT_TAG_FAILURE
    ]
  }),
  productTagsByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.PRODUCT_TAGS_REQUEST,
      ActionTypes.PRODUCT_TAGS_SUCCESS,
      ActionTypes.PRODUCT_TAGS_FAILURE
    ],
    resetType: ActionTypes.PRODUCT_TAGS_RESET
  }),

  saleProduct: crud({
    types: [
      ActionTypes.SALE_PRODUCT_REQUEST,
      ActionTypes.SALE_PRODUCT_SUCCESS,
      ActionTypes.SALE_PRODUCT_FAILURE
    ]
  }),
  saleProductsByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.SALE_PRODUCTS_REQUEST,
      ActionTypes.SALE_PRODUCTS_SUCCESS,
      ActionTypes.SALE_PRODUCTS_FAILURE
    ],
    resetType: ActionTypes.SALE_PRODUCTS_RESET
  }),
  chooseProduct: crud({
    types: [
      ActionTypes.CHOOSE_PRODUCT_REQUEST,
      ActionTypes.CHOOSE_PRODUCT_SUCCESS,
      ActionTypes.CHOOSE_PRODUCT_FAILURE
    ]
  }),
  chooseProductsByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.CHOOSE_PRODUCTS_REQUEST,
      ActionTypes.CHOOSE_PRODUCTS_SUCCESS,
      ActionTypes.CHOOSE_PRODUCTS_FAILURE
    ],
    resetType: ActionTypes.CHOOSE_PRODUCTS_RESET
  }),
  intentProduct: crud({
    types: [
      ActionTypes.INTENT_PRODUCT_REQUEST,
      ActionTypes.INTENT_PRODUCT_SUCCESS,
      ActionTypes.INTENT_PRODUCT_FAILURE
    ]
  }),
  intentProductsByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.INTENT_PRODUCTS_REQUEST,
      ActionTypes.INTENT_PRODUCTS_SUCCESS,
      ActionTypes.INTENT_PRODUCTS_FAILURE
    ],
    resetType: ActionTypes.INTENT_PRODUCTS_RESET
  }),
  bnews: crud({
    types: [
      ActionTypes.BNEWS_REQUEST,
      ActionTypes.BNEWS_SUCCESS,
      ActionTypes.BNEWS_FAILURE
    ]
  }),
  bnewssByQuery: paginate({
    mapActionToKey: action => action.query,
    types: [
      ActionTypes.BNEWSS_REQUEST,
      ActionTypes.BNEWSS_SUCCESS,
      ActionTypes.BNEWSS_FAILURE
    ],
    resetType: ActionTypes.BNEWSS_RESET
  }),
})

// form 草稿箱
const form = combineReducers({
  client: makeForm({
    mapActionToKey: action => action.formKey,
    types: [
      ActionTypes.CLIENT_FORM_UPDATE,
      ActionTypes.CLIENT_FORM_DELETE
    ]
  }),
  user: makeForm({
    mapActionToKey: action => action.formKey,
    types: [
      ActionTypes.USER_FORM_UPDATE,
      ActionTypes.USER_FORM_DELETE
    ]
  }),
  agent: makeForm({
    mapActionToKey: action => action.formKey,
    types: [
      ActionTypes.AGENT_FORM_UPDATE,
      ActionTypes.AGENT_FORM_DELETE
    ]
  }),
  supplier: makeForm({
    mapActionToKey: action => action.formKey,
    types: [
      ActionTypes.SUPPLIER_FORM_UPDATE,
      ActionTypes.SUPPLIER_FORM_DELETE
    ]
  }),
  product: makeForm({
    mapActionToKey: action => action.formKey,
    types: [
      ActionTypes.PRODUCT_FORM_UPDATE,
      ActionTypes.PRODUCT_FORM_DELETE
    ]
  }),
  news: makeForm({
    mapActionToKey: action => action.formKey,
    types: [
      ActionTypes.NEWS_FORM_UPDATE,
      ActionTypes.NEWS_FORM_DELETE
    ]
  }),
  bnews: makeForm({
    mapActionToKey: action => action.formKey,
    types: [
      ActionTypes.BNEWS_FORM_UPDATE,
      ActionTypes.BNEWS_FORM_DELETE
    ]
  })
})
const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  menu,
  oper,
  form,
  routing
})

export default rootReducer
