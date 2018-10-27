import React from 'react'
import LiveDataBlock from 'components/LiveDataBlock'

const MainScreen = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-9'>
          123
        </div>
      </div>

      <div className='row'>
        <div className='col-3'>
          <LiveDataBlock 
            title='PM2.5 (%)'
            data={3}
            signal='normal'
            icon='fas fa-cloud'
            color='#007ACE'
            iconStyle={{left: '25%', top: '30%', fontSize: '20px'}}
          />
        </div>
        <div className='col-3'>
          <LiveDataBlock 
            title='Humidity (%)'
            data={48}
            signal='normal'
            icon='fas fa-tint'
            color='#9C6ADE'
            iconStyle={{left: '35%', top: '25%', fontSize: '24px'}}
          />
        </div>
        <div className='col-3'>
          <LiveDataBlock 
            title='Temperature(℃)'
            data={26}
            signal='normal'
            icon='fas fa-thermometer-half'
            color='#EEC200'
            iconStyle={{left: '35%', top: '22%', fontSize: '28px'}}
          />
        </div>
        <div className='col-3'>
          <LiveDataBlock 
            title='Filter'
            data={70}
            signal='normal'
            icon='fas fa-signal'
            color='#50B83C'
            iconStyle={{left: '25%', top: '30%', fontSize: '20px'}}
          />
        </div>
      </div>
    </div>
  )
}

export default MainScreen