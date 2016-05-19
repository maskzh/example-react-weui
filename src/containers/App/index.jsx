import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../../actions/errorMessage'
import style from './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidUpdate() {
    const { errorMessage } = this.props
    if (!errorMessage) {
      return
    }
    this.props.resetErrorMessage()
  }
  render() {
    const { children } = this.props
    return (
      <div className={style.normal}>
        <div className={style.wrapper}>
          <div className={style.main}>
            <div className={style.content}>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  const {
    errorMessage,
  } = state
  return {
    errorMessage
  }
}

export default connect(mapStateToProps, {
  resetErrorMessage,
})(App)
