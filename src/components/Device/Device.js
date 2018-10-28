import React from 'react'
import ReactTooltip from 'react-tooltip'
import './style.css'

const Device = ({ id, deviceName, did, selectArea, areaId, active }) => {
  return (
    <div 
    //style={{backgroundColor: `var(--pmlevel${level})`}}
    onClick={e => {
      selectArea(did)
      e.stopPropagation()
    }}>
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