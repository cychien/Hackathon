import React from 'react'
import './style.css'

const Legend = () => {
  return (
    <div className="d-flex align-items-center">
      <span>空氣品質佳</span>
      <div className="mx-3" styleName="legend" />
      <span>空氣品質糟</span>
    </div>
  )
}

export default Legend