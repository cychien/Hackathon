import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import Building from 'components/Building'
import './style.css'

const Filter = ({ selectedTime, switchSelectedTime }) => {
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
            date={moment()} // momentPropTypes.momentObj or null
            //onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            //focused={this.state.focused} // PropTypes.bool
            //onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
          />
        </div>
      </div>
      <div className="mt-4" styleName="filter-items">
        <div styleName='dateLabel'>End Date</div>
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
      <div className="mt-4">
        <Building floorActive />
      </div>
    </div>
  )
}

export default Filter