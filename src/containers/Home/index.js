import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import * as userActions from 'actions/user'

import Loading from 'components/Loading'

import { DEFAULT_PORT } from 'config'

class Home extends Component {
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
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
