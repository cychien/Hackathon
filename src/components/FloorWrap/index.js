import React from 'react'
import Floor from '../Floor';
import './style.css'

const FloorWrap = ({ position, floorActive }) => {
  return (
    <div
      className="d-flex flex-column justify-content-between"
      styleName="floor-wrap">
      {
        Object.values(position)
          .reverse()
          .map(({ floor, roomName, devices }, i) => 
            <Floor key={i} floor={floor} roomName={roomName} devices={devices} active={floorActive} />)
      }
    </div>
  )
}

export default FloorWrap