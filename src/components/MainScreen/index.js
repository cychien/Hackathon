import React from 'react'
import LiveDataBlock from 'components/LiveDataBlock'
import Building from 'components/Building'
import Paper from 'components/Paper'
import cx from 'classnames'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import moment from 'moment'
import LineChart from 'components/LineChart'
import './style.css'

const MainScreen = ({selectedTime, switchSelectedTime}) => {
  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-3'>
          <div className='row mb-1'>
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
          <div className='row mb-1'>
            <div className='col-12'>
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
              <div className='row mb-2'>
                <div className='col-5'>
                  <div styleName='dateLabel'>
                    Start Date
                  </div>
                </div>
                <div className='col-7'>
                  <div styleName='datePicker'>
                    <SingleDatePicker
                      date={moment()} // momentPropTypes.momentObj or null
                      //onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                      //focused={this.state.focused} // PropTypes.bool
                      //onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                      id="your_unique_id" // PropTypes.string.isRequired,
                    />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-5'>
                  <div styleName='dateLabel'>
                    End Date
                  </div>
                </div>
                <div className='col-7'>
                  <div styleName='datePicker'>
                    <SingleDatePicker
                      date={moment()} // momentPropTypes.momentObj or null
                      //onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                      //focused={this.state.focused} // PropTypes.bool
                      //onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                      id="your_unique_id" // PropTypes.string.isRequired,
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <Building />
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
              <LineChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen