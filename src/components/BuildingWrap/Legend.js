import React from 'react'
import './style.css'

const Legend = () => {
  return (
    <div className="d-flex align-items-center">
      <span>Hight Quality</span>
      <div className="mx-3" styleName="legend" />
      <span>Low Quality</span>
    </div>
  )
}

export default Legend