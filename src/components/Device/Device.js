import React from 'react'
import cx from 'classnames';
import ReactTooltip from 'react-tooltip'
import './style.css'

const Device = ({ id, deviceName, did, selectArea, areaId, active }) => {
  const deviceStyle = cx('device', {'active': active && (areaId === did)})
  const color = `var(--pmlevel${Math.floor(Math.random()*5)+1})`
  return (
    <div 
    //style={{backgroundColor: `var(--pmlevel${level})`}}
    onClick={e => {
      selectArea(did)
      e.stopPropagation()
    }}>
      <div 
        styleName={deviceStyle}
        data-tip data-for={did} 
        style={{
          borderColor: active ? '' : color,
          backgroundColor: active ? '' : color
      }}
      />
      <ReactTooltip id={did} type='dark' effect='solid'>
        <span>{deviceName}</span>
      </ReactTooltip>
    </div>
  )
}

export default Device