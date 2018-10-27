import React from 'react'
import Paper from 'components/Paper'
import './style.css'

const LiveDataBlock = ({ title, data, signal, icon, color, iconStyle }) => {
  return (
    <Paper>
      <div className="d-flex align-items-center">
        <div className='rounded-circle mr-3' styleName='iconBackground' style={{ backgroundColor: color }}>
          <i className={icon} styleName='icon' style={iconStyle} />
        </div>
        <div>
          <div className='text-secondary'>
            <span className='mr-2'>{title}</span>
            <span className='rounded-circle' styleName='signal' />
          </div>
          <div styleName="data">{data}</div>
        </div>
      </div>
    </Paper>
  )
}

export default LiveDataBlock