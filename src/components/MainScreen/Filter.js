import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import Building from 'components/Building'
import Paper from 'components/Paper'
import './style.css'

const Filter = ({ selectedTime, switchSelectedTime, mainActions, main, focus, setFocus }) => {
  return (
    <div>
      <div className='mt-3 text-secondary font-weight-bold' style={{fontSize: '2em'}}>Dashboard</div>
      <small className='text-secondary' style={{lineHeight: '10px'}}>
        You may change <strong>time</strong> or <strong>devices</strong> settings to see the corresponding data
      </small>
      <div className="mt-1" styleName="filter-items">
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            value='0'
            checked={selectedTime === 'live'}
            onChange={() => switchSelectedTime('live')}
          />
          <div className='form-check-label'>Live Data</div>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            value='1'
            checked={selectedTime === 'custom'}
            onChange={() => switchSelectedTime('custom')}
          />
          <div className='form-check-label'>Historical Data</div>
        </div>
      </div>
      {
        main.queryWay === 'custom' && (
          <div>
            <div styleName='dateLabel'>Start Date</div>
            <div styleName="filter-items">
              <div styleName='datePicker'>
                <SingleDatePicker
                  date={moment(main.startTime)} // momentPropTypes.momentObj or null
                  onDateChange={date => {
                    const obj = moment(date)
                    mainActions.setStartTime(moment(`${obj.year()}-${obj.month() + 1}-${obj.date()}`).add(main.startHour, 'h').add(main.startMin, 'm').toISOString())
                  }} // PropTypes.func.isRequired
                  focused={focus === 'startTime'} // PropTypes.bool
                  onFocusChange={() => {
                    if (focus === 'startTime') setFocus('')
                    else setFocus('startTime')
                  }} // PropTypes.func.isRequired
                  id="startTime" // PropTypes.string.isRequired,
                  isOutsideRange={day => {
                    return !day.isSameOrBefore(moment(main.endTime))
                  }}
                  disabled={main.queryWay === 'live'}
                  readOnly
                />
              </div>
              <div>
                <input
                  type="time"
                  className="form-control"
                  styleName='timePicker'
                  onChange={e => {
                    const hour = e.target.value.split(':')[0]
                    const min = e.target.value.split(':')[1]
                    const obj = moment(main.startTime)
                    mainActions.setStart(e.target.value)
                    mainActions.setStartTime(moment(`${obj.year()}-${obj.month() + 1}-${obj.date()}`).add(hour, 'h').add(min, 'm').toISOString())
                  }}
                  value={`${main.startHour}:${main.startMin}`}
                />
              </div>
            </div>
          </div>
      )}
      {
        main.queryWay === 'custom' && (
          <div>
            <div styleName='dateLabel'>End Date</div>
            <div styleName="filter-items">
              <div styleName='datePicker'>
                <SingleDatePicker
                  date={moment(main.endTime)} // momentPropTypes.momentObj or null
                  onDateChange={date => {
                    const obj = moment(date)
                    mainActions.setEndTime(moment(`${obj.year()}-${obj.month() + 1}-${obj.date()}`).add(main.endHour, 'h').add(main.endMin, 'm').toISOString())
                  }}
                  focused={focus === 'endTime'} // PropTypes.bool
                  onFocusChange={() => {
                    if (focus === 'endTime') setFocus('')
                    else setFocus('endTime')
                  }} // PropTypes.func.isRequired
                  id="endTime" // PropTypes.string.isRequired,
                  isOutsideRange={day => {
                    return !day.isSameOrAfter(moment(main.startTime))
                  }}
                  disabled={main.queryWay === 'live'}
                  readOnly
                />
              </div>
              <div>
                <input
                  type="time"
                  className="form-control"
                  styleName='timePicker'
                  onChange={e => {
                    const hour = e.target.value.split(':')[0]
                    const min = e.target.value.split(':')[1]
                    const obj = moment(main.endTime)
                    mainActions.setEnd(e.target.value)
                    mainActions.setEndTime(moment(`${obj.year()}-${obj.month() + 1}-${obj.date()}`).add(hour, 'h').add(min, 'm').toISOString())
                  }}
                  value={`${main.endHour}:${main.endMin}`}
                />
              </div>
            </div>
          </div>
      )}
      <div className="mt-4">
        <Building floorActive />
      </div>
    </div>
  )
}

export default Filter