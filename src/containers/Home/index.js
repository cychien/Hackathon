import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import * as usersActions from 'actions/users'

import Loading from 'components/Loading'

import { DEFAULT_PORT } from 'config'

class Home extends Component {
  componentWillMount () {
    const {usersActions} = this.props
    usersActions.getUsers()
  }

  render () {
    return (
      <div className='container'>
        <h1 styleName='happy'>Home</h1>
        <Link className='btn btn-secondary' to='/dashboard'>Dashboard</Link>
        <div className='mt-2'>
          <i className='fab fa-pied-piper-hat fa-2x text-info' />
        </div>
        <Loading text='Loading' />
        <div>{`DEFAULT_PORT: ${DEFAULT_PORT}`}</div>
      </div>
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
