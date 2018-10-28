import React from 'react'
import LiveDataBlock from 'components/LiveDataBlock'
import LineChart from 'components/LineChart'
import Filter from './Filter';
import Paper from 'components/Paper'
import 'react-dates/initialize'
import './style.css'

const MainScreen = ({ selectedTime, switchQueryWay, main, mainActions, focus, setFocus }) => {
  const { queryWay, pm25Arr, humidityArr, tempArr, filterArr, pm25Avg, humidityAvg, tempAvg, filterAvg, isLoading } = main
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <Filter 
            selectedTime={selectedTime}
            switchSelectedTime={switchQueryWay}
            mainActions={mainActions}
            main={main}
            focus={focus}
            setFocus={setFocus}
          />
        </div>


        {/* Dashboard */}
        <div className='col-9'>
          <div className='row'>
            <div className='col-6'>
              <LiveDataBlock
                title='PM2.5 (%)'
                data={
                  (pm25Arr.length > 0) 
                    ? (queryWay === 'live')
                      ? pm25Arr[pm25Arr.length - 1].value[0]
                      : pm25Avg
                    : '--'
                }
                signal='normal'
                icon='fas fa-cloud'
                color='#007ACE'
                iconStyle={{ left: '25%', top: '30%', fontSize: '20px' }}
                isLoading={isLoading}
              />
            </div>
            <div className='col-6'>
              <LiveDataBlock
                title='Humidity (%)'
                data={
                  (humidityArr.length > 0)
                    ? (queryWay === 'live')
                      ? humidityArr[humidityArr.length - 1].value[0]
                      : humidityAvg
                    : '--'
                }
                signal='normal'
                icon='fas fa-tint'
                color='#9C6ADE'
                iconStyle={{ left: '35%', top: '25%', fontSize: '24px' }}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-6'>
              <LiveDataBlock
                title='Temperature(℃)'
                data={
                  (tempArr.length > 0)
                    ? (queryWay === 'live')
                      ? tempArr[tempArr.length - 1].value[0]
                      : tempAvg
                    : '--'
                }
                signal='normal'
                icon='fas fa-thermometer-half'
                color='#EEC200'
                iconStyle={{ left: '35%', top: '22%', fontSize: '28px' }}
                isLoading={isLoading}
              />
            </div>
            <div className='col-6'>
              <LiveDataBlock
                title='Filter'
                data={
                  (filterArr.length > 0)
                    ? (queryWay === 'live')
                      ? filterArr[filterArr.length - 1].value[0]
                      : filterAvg
                    : '--'
                }
                signal='normal'
                icon='fas fa-signal'
                color='#50B83C'
                iconStyle={{ left: '25%', top: '30%', fontSize: '20px' }}
                isLoading={isLoading}
              />
            </div>
          </div>
          <LineChart main={main} />
        </div>
      </div>
    </div>
  )
}

export default MainScreen