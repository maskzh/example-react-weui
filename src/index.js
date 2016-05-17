/*
 * 主文件
 */
import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'
import routes from './config/routes'
import Root from './containers/Root'
import configureStore from './store'

// 导入样式文件
import './styles/toolkit.css'
import './styles/index.css'

const store = configureStore(window.__INITIAL_STATE__)

const history = hashHistory

render(
  <Root store={store} history={history} routes={routes} />,
  document.getElementById('root')
)
