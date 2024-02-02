import React from 'react'
import PropTypes from 'prop-types'

import { config } from 'aws-cognito-redux-saga'

class Auth extends React.Component {
  static propTypes = {
    getUser: PropTypes.func
  }

  componentWillMount() {
    config.config.set({
      region: 'us-east-1',
      IdentityPoolId: '',
      UserPoolId: 'eu-west-3_Z69j31V3j',
      ClientId: '39f6e6glenq9cbvsrlu1smcdkh'
    })

    this.props.getUser()
  }

  render() {
    return null
  }
}

export default Auth
