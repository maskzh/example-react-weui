import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../../actions/errorMessage'

class App extends Component {
  componentDidUpdate() {
    if (!this.props.errorMessage) return
    setTimeout(() => this.props.resetErrorMessage(), 3000)
  }
  render() {
    const { errorMessage, children } = this.props
    return (
      <div>
        <div
          className="weui_toptips weui_warn"
          style={{ display: errorMessage ? 'block' : 'none' }}
        >{errorMessage}</div>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
  children: PropTypes.node,
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
