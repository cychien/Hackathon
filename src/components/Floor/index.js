import React from 'react'
import cx from 'classnames';
import Device from '../Device/Device';
import './style.css'

const Floor = ({ floor, roomName, devices, active = false }) => {
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
              <Device key={i} id={id} deviceName={deviceName} did={did} />)
        }
      </div>
    </div>
  )
}

export default Floor