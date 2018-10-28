import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MainScreen from 'components/MainScreen'
import moment from 'moment'
import './style.css'

import * as mainActions from 'actions/main'

import Loading from 'components/Loading'

import { DEFAULT_PORT } from 'config'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: ''
    }
  }

  setFocus = (focus) => {
    this.setState({
      focus
    })
  }

  componentDidMount () {
    const {mainActions, main} = this.props
    //mainActions.getAllData()
    //mainActions.getOutData({sd: moment().subtract(1, 'h').toISOString(), ed: moment().toISOString()})
    if (main.queryWay === 'live') {
      mainActions.getData(main.areaId)
      this.timer = setInterval(
        () => {
          mainActions.getData(main.areaId)
        },
        3000
      )
    } else {
      mainActions.getPeriodData(main.areaId, main.startTime, main.endTime)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.main.areaId !== this.props.main.areaId) { 
      this.timer && clearInterval(this.timer);
      if (nextProps.main.queryWay === 'live') {
        nextProps.mainActions.getData(nextProps.main.areaId)
        this.timer = setInterval(
          () => {
            nextProps.mainActions.getData(nextProps.main.areaId)
          },
          3000
        )
      } else {
        nextProps.mainActions.getPeriodData(nextProps.main.areaId, nextProps.main.startTime, nextProps.main.endTime)
      }
    }
    if (nextProps.main.queryWay !== this.props.main.queryWay) {
      this.timer && clearInterval(this.timer);
      if (nextProps.main.queryWay === 'live') {
        nextProps.mainActions.getData(nextProps.main.areaId)
        this.timer = setInterval(
          () => {
            nextProps.mainActions.getData(nextProps.main.areaId)
          },
          3000
        )
      } else {
        nextProps.mainActions.getPeriodData(nextProps.main.areaId, nextProps.main.startTime, nextProps.main.endTime)
      }
    }
    if ((nextProps.main.startTime !== this.props.main.startTime) || (nextProps.main.endTime !== this.props.main.endTime)) {
      this.timer && clearInterval(this.timer);
      nextProps.mainActions.getPeriodData(nextProps.main.areaId, nextProps.main.startTime, nextProps.main.endTime)
    }
  }

  componentWillUnmount () {
    this.timer && clearInterval(this.timer);
  }

  render () {
    const {focus} = this.state
    const {main, mainActions} = this.props
    const {queryWay} = main

    return (
      <MainScreen
        main={main}
        mainActions={mainActions}
        selectedTime={queryWay} 
        switchQueryWay={mainActions.switchQueryWay}
        focus={focus}
        setFocus={this.setFocus}
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
