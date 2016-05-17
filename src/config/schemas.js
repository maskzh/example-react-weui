/*
 * Schema 定义
 */
import { Schema, arrayOf } from 'normalizr'
// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form where repos and users are placed in `entities`, and nested
// JSON objects are replaced with their IDs. This is very convenient for
// consumption by reducers, because we can easily build a normalized tree
// and keep it updated as we fetch more data.

// Read more about Normalizr: https://github.com/gaearon/normalizr

// const userSchema = new Schema('users', {
//   idAttribute: 'login'
// })
// const repoSchema = new Schema('repos', {
//   idAttribute: 'fullName'
// })
// repoSchema.define({
//   owner: userSchema
// })

// client 客户
const clientSchema = new Schema('clients', {
  idAttribute: 'id'
})

// order 订单
const orderSchema = new Schema('orders', {
  idAttribute: 'id'
})

// 用户
const userSchema = new Schema('users', {
  idAttribute: 'id'
})

// 代理商
const agentSchema = new Schema('agents', {
  idAttribute: 'id'
})

// 供货商
const supplierSchema = new Schema('suppliers', {
  idAttribute: 'id'
})

// 商品
const productSchema = new Schema('products', {
  idAttribute: 'id'
})

// 商品分类
const productCategorySchema = new Schema('productCategories', {
  idAttribute: 'id'
})

// 商品标签
const productTagSchema = new Schema('productTags', {
  idAttribute: 'id'
})

// 资讯
const newsSchema = new Schema('newss', {
  idAttribute: 'id'
})

// 资讯分类
const newsCategorySchema = new Schema('newsCategories', {
  idAttribute: 'id'
})

// 代理商品
const saleProductSchema = new Schema('saleProducts', {
  idAttribute: 'id'
})

// 可代理商品
const chooseProductSchema = new Schema('chooseProducts', {
  idAttribute: 'id'
})

// 发布商品
const intentProductSchema = new Schema('intentProducts', {
  idAttribute: 'id'
})

// 采购资讯
const bnewsSchema = new Schema('bnewss', {
  idAttribute: 'id'
})

productSchema.define({
  category: productCategorySchema
})
productSchema.define({
  supplier: supplierSchema
})
clientSchema.define({
  salesman: userSchema
})
userSchema.define({
  data: agentSchema
})
agentSchema.define({
  user: userSchema
})
agentSchema.define({
  parentAgent: agentSchema
})
supplierSchema.define({
  user: userSchema
})
newsSchema.define({
  category: newsCategorySchema
})

// Schemas for Github API responses.
export const Schemas = {
  CLIENT: clientSchema,
  CLIENT_ARRAY: arrayOf(clientSchema),

  ORDER: orderSchema,
  ORDER_ARRAY: arrayOf(orderSchema),

  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),

  AGENT: agentSchema,
  AGENT_ARRAY: arrayOf(agentSchema),

  SUPPLIER: supplierSchema,
  SUPPLIER_ARRAY: arrayOf(supplierSchema),

  PRODUCT: productSchema,
  PRODUCT_ARRAY: arrayOf(productSchema),
  PRODUCT_CATEGORY: productCategorySchema,
  PRODUCT_CATEGORY_ARRAY: arrayOf(productCategorySchema),
  PRODUCT_TAG: productTagSchema,
  PRODUCT_TAG_ARRAY: arrayOf(productTagSchema),

  NEWS: newsSchema,
  NEWS_ARRAY: arrayOf(newsSchema),
  NEWS_CATEGORY: newsCategorySchema,
  NEWS_CATEGORY_ARRAY: arrayOf(newsCategorySchema),

  SALE_PRODUCT: saleProductSchema,
  SALE_PRODUCT_ARRAY: arrayOf(saleProductSchema),

  CHOOSE_PRODUCT: chooseProductSchema,
  CHOOSE_PRODUCT_ARRAY: arrayOf(chooseProductSchema),

  INTENT_PRODUCT: intentProductSchema,
  INTENT_PRODUCT_ARRAY: arrayOf(intentProductSchema),

  BNEWS: bnewsSchema,
  BNEWS_ARRAY: arrayOf(bnewsSchema),

}
