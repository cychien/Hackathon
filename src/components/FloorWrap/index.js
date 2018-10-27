import React from 'react'
import Floor from '../Floor';
import './style.css'

const FloorWrap = ({ position }) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      styleName="floor-wrap">
      {
        Object.values(position)
          .reverse()
          .map(({ floor, roomName, devices }, i) => 
            <Floor key={i} floor={floor} roomName={roomName} devices={devices} />)
      }
    </div>
  )
}

export default FloorWrap