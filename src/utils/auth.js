/*
 * 认证
 */
import 'isomorphic-fetch'
import { camelizeKeys } from 'humps'

function pretendRequest(mobile, password) {
  return fetch('/auth/admin-login', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      mobile,
      password
    })
  })
  .then((response) => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (response.ok && json.result) {
      return json
    }
    return Promise.reject(json)
  })
}
export default {
  login(mobile, pass, cb) {
    if (localStorage.user) {
      if (cb) cb(true)
      return
    }
    pretendRequest(mobile, pass).then((res) => {
      const user = camelizeKeys((res.data && res.data.user) || {})
      const data = camelizeKeys((res.data && res.data.data) || {})
      user.data = data
      user.accessToken = res.message
      localStorage.user = JSON.stringify(user)
      // 200 为代理商
      if (cb) cb(true, user)
    }, (res) => {
      if (cb) cb(false, res)
    })
  },

  getUser() {
    return localStorage.user
  },

  logout(cb) {
    delete localStorage.user
    delete localStorage.state
    if (cb) cb()
  },

  loggedIn() {
    return !!localStorage.user
  },

  onChange() {}
}
