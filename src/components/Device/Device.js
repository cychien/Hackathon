import React from 'react'
import ReactTooltip from 'react-tooltip'
import './style.css'

const Device = ({ id, deviceName, did }) => {
  return (
    <div>
      <div styleName="device" data-tip data-for={did} />
      <ReactTooltip id={did} type='dark' effect='solid'>
        <span>{deviceName}</span>
      </ReactTooltip>
    </div>
  )
}

export default Device