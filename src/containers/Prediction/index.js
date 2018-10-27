import React, { Component } from 'react'
import PredictionScreen from 'components/PredictionScreen'

class Prediction extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'plusPeople'
    }
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

export default Prediction