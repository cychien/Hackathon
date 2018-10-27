import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MainScreen from 'components/MainScreen'
import './style.css'

import * as usersActions from 'actions/users'

import Loading from 'components/Loading'

import { DEFAULT_PORT } from 'config'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTime: 'live'
    }
  }

  switchSelectedTime = (selectedTime) => {
    this.setState({
      selectedTime
    })
  }

  render () {
    const { selectedTime } = this.state

    return (
      <MainScreen 
        selectedTime={selectedTime} 
        switchSelectedTime={this.switchSelectedTime}
      />
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
