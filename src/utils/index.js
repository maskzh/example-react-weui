/*
 * 工具函数
 */
import 'isomorphic-fetch'
import { merge, forIn } from 'lodash'
import { decamelize, decamelizeKeys } from 'humps'
import auth from './auth'

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
    if (response.status === 401) {
      auth.logout()
      alert('您的身份认证失败！')
    }
    return reject(json)
  })
}

// 封装的 ajax 方法，仅在请求中插入 access-token
export function ajax(url, options) {
  const { accessToken: token } = auth.getUser()

  const defaultOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'access-token': token
    },
  }

  const _url = decamelize(url)
  let _options = defaultOptions

  // 添加 token
  if (options && options.method && options.method.toLowerCase() !== 'get') {
    _options = merge({}, defaultOptions, options)
    _options.body = JSON.stringify(decamelizeKeys(_options.body))
  }

  return fetch(_url, _options).then(parseJson).then(fetchPreprocessor)
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

export function throttle(fn, interval) {
  const _self = fn
  let timer = null
  let firstTime = true

  return (...args) => {
    const _me = this

    if (firstTime) {
      _self.apply(_me, args)
      firstTime = false
      return
    }

    if (timer) return

    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      _self.apply(_me, args)
    }, interval || 500)
  }
}
