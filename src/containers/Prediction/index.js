import React, { Component } from 'react'
import PredictionScreen from 'components/PredictionScreen'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as mainActions from 'actions/main'

class Prediction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'plusPeople'
    }
  }

  componentWillMount () {
    const {mainActions} = this.props
    // mainActions.getAllData()
  }

  switchType = (type) => {
    this.setState({
      type
    })
  }

  render () {
    const {type} = this.state

    return (
      <PredictionScreen 
        type={type}
        switchType={this.switchType}
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
)(Prediction)
