import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import * as usersActions from 'actions/users'

import MainScreen from 'components/MainScreen';
import Loading from 'components/Loading'

import { DEFAULT_PORT } from 'config'

class Home extends Component {
  componentWillMount () {
    const {usersActions} = this.props
    usersActions.getUsers()
  }

  render () {
    return (
      <MainScreen />
    )
  }
}

function mapStateToProps (state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps (dispatch) {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
