import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'

const Root = (props) =>
  <Provider store={props.store}>
    <Router history={props.history} routes={props.routes} />
  </Provider>

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
  store: PropTypes.object.isRequired
}

export default Root
