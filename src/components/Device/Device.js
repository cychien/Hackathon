import React from 'react'
import ReactTooltip from 'react-tooltip'
import './style.css'

const Device = ({ id, deviceName, did, selectArea, areaId, active }) => {
  return (
    <div onClick={() => selectArea(did)} >
      <div 
        styleName="device" 
        data-tip data-for={did} 
        style={{backgroundColor: active ? (areaId === did ? 'black' : 'white') : ''}}
      />
      <ReactTooltip id={did} type='dark' effect='solid'>
        <span>{deviceName}</span>
      </ReactTooltip>
    </div>
  )
}

export default Device