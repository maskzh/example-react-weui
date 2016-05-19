/*
 * 工具函数
 */
import 'isomorphic-fetch'
import { merge, forIn } from 'lodash'
import { decamelize, decamelizeKeys } from 'humps'

// 解析为 Json
export function parseJson(response) {
  return response.json().then(json => ({ json, response }))
}

// 对返回预处理
export function fetchPreprocessor({ json, response }) {
  return new Promise((resolve, reject) => {
    if (response.ok && json.result) {
      return resolve(json)
    }
    return reject(json)
  })
}

// 封装的 ajax 方法，仅在请求中插入 access-token
export function ajax(url, options) {
  const { accessToken: token } = JSON.parse(localStorage.user)
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
  let tmpOptions = defaultOptions

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
  }

  return fetch(encodeURIComponent(tmpUrl), tmpOptions).then(parseJson).then(fetchPreprocessor)
}

// 将对象序列化为 query
export function serialize(obj) {
  const str = []
  forIn(obj, (value, key) => {
    if (obj.hasOwnProperty(key)) {
      str.push(`${key}=${value}`)
    }
  })
  return str.join('&')
}

// 将 query 转化为对象
export function getQueryParameters(str) {
  const o = {}
  str.replace(/(^\?)/, '').split('&').forEach((n) => {
    const a = n.split('=')
    o[a[0]] = a[1]
  })
  return o
}

// 判断对象是否为空
export function hasSomeProperties(obj) {
  let flag = false
  forIn(obj, (value, key) => {
    if (obj.hasOwnProperty(key)) {
      flag = true
    }
  })
  return flag
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
