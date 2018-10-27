import React from 'react'
import Device from './Device';
import './style.css'

const Floor = ({ floor, roomName, devices }) => {
  return (
    <div
      styleName="floor"
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