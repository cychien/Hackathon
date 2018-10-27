import React from 'react'
import Paper from 'components/Paper'
import './style.css'

const LiveDataBlock = ({title, data, signal, icon, color, iconStyle}) => {
  return (
    <Paper>
      <div className='row' styleName='liveDataBlock'>
        <div className='col-3'>
          <div className='rounded-circle' styleName='iconBackground' style={{backgroundColor: color}}>
            <i className={icon} styleName='icon' style={iconStyle} />
          </div>
        </div>
        <div className='col-9'>
          <div className='pl-2'>
            <div className='text-secondary' styleName='title'>
              <span className='mr-2'>{title}</span>
              <span className='rounded-circle mt-1' styleName='signal'/>
            </div>
            <div styleName='data' className='mt-1'>
              {data}
            </div>
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default LiveDataBlock