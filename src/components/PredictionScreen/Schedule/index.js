import React, { PureComponent } from 'react'
import Paper from 'components/Paper'
import Select from 'react-select'
import position from 'constants/position';
import { initState } from 'reducers/schedule';

class Schedule extends PureComponent {
  constructor(props) {
    super(props)

    this.state = initState[0]
    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    if (e.target.type === 'number') {
      this.setState({ people: e.target.value })
    } else {
      this.setState({ [e.target.type]: e.target.value })
    }
  }

  handleSelect({ value }) {
    this.setState({ room: value })
  }

  handleSubmit(e) {
    const { scheduleActions } = this.props
    e.preventDefault();
    scheduleActions.postForm(this.state)
  }

  render() {
    const roomOptions =
      Object.values(position)
        .map((({ roomName }) => ({ value: roomName, label: roomName })))
    const { schedule } = this.props
    const { room, people, date, time } = this.state
    const disabled = room && people && date && time
    return (
      <Paper>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Room</label>
            <Select
              className='text-left'
              options={roomOptions}
              simpleValue
              clearable={false}
              onChange={this.handleSelect}
            />
          </div>
          <div className="form-group">
            <label>People</label>
            <input
              type="number"
              className="form-control"
              placeholder="6"
              min="1"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input
              type="date"
              className="form-control"
              placeholder="date"
              onChange={this.handleChange}
            />
            <input
              type="time"
              className="form-control"
              placeholder="date"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3" disabled={!disabled}>Submit</button>
        </form>
        <div className="row">
          <table className="table table-sm table-striped">
            <thead>
              <tr>
                <th className="text-center">Room</th>
                <th className="text-center">People</th>
                <th className="text-center">Time</th>
              </tr>
            </thead>
            <tbody>
              {
                schedule.map(({ room, people, date, time }, i) => {
                  if (!room || !people || !date || !time) return
                  return (
                    <tr key={i}>
                      <td align="center" className="align-middle">{room}</td>
                      <td align="center" className="align-middle">{people}</td>
                      <td align="center">{date} {time}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </Paper>
    )
  }
}

export default Schedule