import React from 'react'
import LiveDataBlock from 'components/LiveDataBlock'
import Building from 'components/Building'
import Paper from 'components/Paper'
import { Line } from 'react-chartjs-2'
import cx from 'classnames'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'PM2.5 (%)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(0, 122, 206, 0.4)',
      borderColor: 'rgba(0, 122, 206, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(0, 122, 206, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0, 122, 206, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'Humidity (%)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(156, 106, 222, 0.4)',
      borderColor: 'rgba(156, 106, 222, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(156, 106, 222, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(156, 106, 222, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 55, 77, 80, 33, 22, 33]
    },
    {
      label: 'Temperature (℃)',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(238, 194, 0, 0.4)',
      borderColor: 'rgba(238, 194, 0, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(238, 194, 0, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(238, 194, 0, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [50, 59, 50, 71, 62, 58, 43]
    },
    {
      label: 'Filter',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(80, 184, 60, 0.4)',
      borderColor: 'rgba(80, 184, 60, 1)',
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(80, 184, 60, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(80, 184, 60, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 3,
      pointHitRadius: 10,
      data: [61, 54, 87, 61, 55, 45, 30]
    }
  ]
}

const MainScreen = ({selectedTime, switchSelectedTime}) => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-3'>
          <div className='row mb-3'>
            <div className='col-12'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  value='0'
                  checked={selectedTime === 'live'}
                  onChange={() => switchSelectedTime('live')}
                />
                <label className='form-check-label'>
                  即時資料
                </label>
              </div>
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-4'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='radio'
                  value='1'
                  checked={selectedTime === 'custom'}
                  onChange={() => switchSelectedTime('custom')}
                />
                <label className='form-check-label'>
                  歷史資料
                </label>
              </div>
            </div>
            <div className='col-8'>
              123
            </div>
          </div>
        </div>
        
        {/* Dashboard */}
        <div className='col-9'>
          <div className='row mb-3'>
            <div className='col-6'>
              <LiveDataBlock 
                title='PM2.5 (%)'
                data={3}
                signal='normal'
                icon='fas fa-cloud'
                color='#007ACE'
                iconStyle={{left: '25%', top: '30%', fontSize: '20px'}}
              />
            </div>
            <div className='col-6'>
              <LiveDataBlock 
                title='Humidity (%)'
                data={48}
                signal='normal'
                icon='fas fa-tint'
                color='#9C6ADE'
                iconStyle={{left: '35%', top: '25%', fontSize: '24px'}}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <div className='col-6'>
              <LiveDataBlock 
                title='Temperature(℃)'
                data={26}
                signal='normal'
                icon='fas fa-thermometer-half'
                color='#EEC200'
                iconStyle={{left: '35%', top: '22%', fontSize: '28px'}}
              />
            </div>
            <div className='col-6'>
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
          <div className='row'>
            <div className='col-12'>
              <Paper>
                <label>Overview</label>
                <Line data={data} />
              </Paper>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Building />
      </div>
    </div>
  )
}

export default MainScreen