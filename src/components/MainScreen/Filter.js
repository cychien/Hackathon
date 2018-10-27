import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import Building from 'components/Building'
import './style.css'

const Filter = ({ selectedTime, switchSelectedTime, mainActions, main, focus, setFocus }) => {
  return (
    <div>
      <div className="mt-3" styleName="filter-items">
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            value='0'
            checked={selectedTime === 'live'}
            onChange={() => switchSelectedTime('live')}
          />
          <label className='form-check-label'>即時資料</label>
        </div>
        <div className='form-check'>
          <input
            className='form-check-input'
            type='radio'
            value='1'
            checked={selectedTime === 'custom'}
            onChange={() => switchSelectedTime('custom')}
          />
          <label className='form-check-label'>歷史資料</label>
        </div>
      </div>
      <div className="mt-4" styleName="filter-items">
        <div styleName='dateLabel'>Start Date</div>
        <div styleName='datePicker'>
          <SingleDatePicker
            date={moment(main.startTime)} // momentPropTypes.momentObj or null
            onDateChange={date => {
              mainActions.setStartTime(date.toISOString())
              setFocus('endTime')
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
          />
        </div>
      </div>
      <div className="mt-4" styleName="filter-items">
        <div styleName='dateLabel'>End Date</div>
        <div styleName='datePicker'>
          <SingleDatePicker
            date={moment(main.endTime)} // momentPropTypes.momentObj or null
            onDateChange={date => mainActions.setEndTime(date.toISOString())} // PropTypes.func.isRequired
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
          />
        </div>
      </div>
      <div className="mt-4">
        <Building floorActive />
      </div>
    </div>
  )
}

export default Filter