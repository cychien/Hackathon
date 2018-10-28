import React from 'react'
import cx from 'classnames';
import ReactTooltip from 'react-tooltip'
import './style.css'

const Device = ({ id, deviceName, did, selectArea, areaId, active }) => {
  const deviceStyle = cx('device', {'active': active && (areaId === did)})
  return (
    <div onClick={() => selectArea(did)} >
      <div 
        styleName={deviceStyle}
        data-tip data-for={did} 
      />
      <ReactTooltip id={did} type='dark' effect='solid'>
        <span>{deviceName}</span>
      </ReactTooltip>
    </div>
  )
}

export default Device