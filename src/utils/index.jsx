/*
 * 工具函数
 */
import 'isomorphic-fetch'
import React from 'react'
import { merge, uniq, assign, groupBy } from 'lodash'
import { decamelize, decamelizeKeys } from 'humps'
import { message } from 'antd'
import auth from './auth'

// 解析为 Json
export function parseJson(response) {
  return response.json().then(json => ({ json, response }))
}

// 对返回预处理
// 处理 401 错误
function handle401() {
  auth.logout(() => {
    location.reload()
  })
}
export function fetchPreprocessor({ json, response }) {
  if (response.ok && json.result) {
    return json
  }
  if (response.status === 401) {
    message.error((<span>
      <span>您的认证出现了问题，</span>
      <span className="link" onClick={handle401}>重新登录</span>
    </span>), 5000)
  } else {
    message.error(json.message)
  }
  return Promise.reject(json)
}

// 封装的 ajax 方法，仅在请求中插入 access-token
export function ajax(url, options) {
  const { accessToken: token, dataId } = JSON.parse(localStorage.user)
  const defaultOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'access-token': token
    },
    body: {
      'access-token': token
    }
  }
  let tmpUrl = decamelize(url)
  tmpUrl = tmpUrl.replace(/intent_purchase/, 'intentPurchase')
  let tmpOptions = {}
  // 添加 token
  if (options && options.method && options.method.toLowerCase() !== 'get') {
    tmpOptions = merge({}, defaultOptions, options)
    tmpOptions.body = JSON.stringify(decamelizeKeys(tmpOptions.body))
  } else {
    if (url.indexOf('?') === -1) {
      tmpUrl = `${tmpUrl}?access-token=${token}`
    } else {
      tmpUrl = `${tmpUrl}&access-token=${token}`
    }
    if (dataId) tmpUrl = `${tmpUrl}&data_id=${dataId}`
    tmpOptions = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
  }
  return fetch(tmpUrl, tmpOptions).then(parseJson).then(fetchPreprocessor)
}

// 将对象序列化为 query
export function serialize(obj) {
  let p
  const str = []
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`)
    }
  }
  return str.join('&')
}

export function getQueryParameters(str) {
  const o = {}
  str.replace(/(^\?)/, '').split('&').forEach((n) => {
    const a = n.split('=')
    o[a[0]] = a[1]
  })
  return o
}

// 深对比，比较两个对象
export function equal(o1, o2) {
  if (typeof o1 !== typeof o2) {
    return false
  }

  if (typeof o1.length !== typeof o2.length) {
    return false
  }

  let bool = true

  const keyArr1 = []
  const keyArr2 = []

  for (const i in o1) {
    if (o1.hasOwnProperty(i)) {
      keyArr1.push(i)
    }
  }

  for (const i in o2) {
    if (o1.hasOwnProperty(i)) {
      keyArr2.push(i)
    }
  }

  if (keyArr1.length !== keyArr2.length) {
    return false
  }

  for (let i = 0, k = keyArr2.length; i < k; i++) {
    keyArr1.push(keyArr2[i])
  }

  const keyArr = uniq(keyArr1)

  for (let i = 0, k = keyArr.length; i < k; i++) {
    if ((keyArr[i] in o1) && (keyArr[i] in o2)) {
      if (typeof o1[keyArr[i]] === 'object' && typeof o2[keyArr[i]] === 'object') {
        bool = equal(o1[keyArr[i]], o2[keyArr[i]])
      } else if (o1[keyArr[i]] !== o2[keyArr[i]]) {
        return false
      }
    } else {
      return false
    }
  }

  return bool
}

// 判断对象是否为空
export function hasSomeProperties(obj) {
  let flag = false
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      flag = true
    }
  }
  return flag
}

// 业务相关方法，生成查询并推入 History
export function serializeIn(props, ...obj) {
  const query = serialize(assign({}, props.query, ...obj))
  props.pushState(`${props.pathname}?${query}`)
}

// 判断手机号码是否正确
export function isPhone(value) {
  return /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|17[0-9]{1})+\d{8})$/.test(value)
}

// 转化图片
export function cloudPic(value, isUser) {
  return ((value && `http://jkbsimg.com/${value}`) ||
    (isUser ? 'http://jkbsimg.com/up/pic/2016/03/20/dbLDpMEkF1.png' : 'http://jkbsimg.com/up/pic/2016/03/20/uDP6MtRrbh.gif'))
}

export function listToTree(list) {
  const obj = groupBy(list, (item) => item.parent)
  return (obj[0] || []).map((item) => ({
    key: item.id,
    value: item.id,
    label: item.title,
    children: (obj[item.id] || []).map((subItem) => ({
      key: subItem.id,
      value: item.id,
      label: subItem.title
    }))
  }))
}
