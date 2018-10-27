import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import cx from 'classnames';
import Device from '../Device/Device';
import './style.css'

import * as mainActions from 'actions/main'

class Floor extends Component {
  render () {
    const { floor, roomName, devices, active = false, mainActions, main } = this.props
    const FloorClass = cx('floor', { 'floor-active': active })
    return (
      <div
        styleName={FloorClass}
      >
        <p className="font-weight-bold">{roomName}</p>
        <div className="d-flex justify-content-around">
          {
            Object.values(devices)
              .map(({ id, deviceName, did }, i) =>
                <Device key={i} id={id} deviceName={deviceName} did={did} selectArea={mainActions.selectArea} areaId={main.areaId}/>)
          }
        </div>
      </div>
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
)(Floor)