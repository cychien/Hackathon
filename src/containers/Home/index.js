import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MainScreen from 'components/MainScreen'
import './style.css'

import * as mainActions from 'actions/main'

import Loading from 'components/Loading'

import { DEFAULT_PORT } from 'config'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTime: 'live'
    }
  }

  componentDidMount () {
    const {mainActions, main} = this.props
    this.timer = setInterval(
      () => {
        mainActions.getData(main.areaId)
      },
      10000
    );
  }

  componentWillUnmount () {
    this.timer && clearInterval(this.timer);
  }

  switchSelectedTime = (selectedTime) => {
    this.setState({
      selectedTime
    })
  }

  render () {
    const { selectedTime } = this.state
    const {main, mainActions} = this.props

    return (
      <MainScreen
        main={main}
        selectedTime={selectedTime} 
        switchSelectedTime={this.switchSelectedTime}
      />
    )
  }
}

function mapStateToProps (state) {
  return {
    main: state.main
  }
}

function mapDispatchToProps (dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
