import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resetErrorMessage } from '../../actions/errorMessage'

class App extends Component {
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
      <div className="container">
        {children}
      </div>
    )
  }
}

App.propTypes = {
  errorMessage: PropTypes.string,
  resetErrorMessage: PropTypes.func.isRequired,
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
