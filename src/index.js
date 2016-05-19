/*
 * 主文件
 */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './config/routes'
import configureStore from './store'

// 导入样式文件
import './styles/toolkit.css'
import './styles/index.styl'

const store = configureStore(window.__INITIAL_STATE__)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
