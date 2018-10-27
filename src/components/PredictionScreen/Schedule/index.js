import React, { PureComponent } from 'react'
import Paper from 'components/Paper'
import Select from 'react-select'
import position from 'constants/position';

class Schedule extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      date: "",
      time: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.type]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const roomOptions =
      Object.values(position)
        .map((({ roomName }) => ({ value: roomName, label: roomName })))
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
            //value={text}
            //onChange={e => { textChangeHandler(e) }}
            />
          </div>
          <div className="form-group">
            <label>People</label>
            <input type="number" className="form-control" placeholder="6" min="1" />
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
          <button type="submit" className="btn btn-primary mb-3">Submit</button>
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
              <tr>
                <td align="center" className="align-middle">808</td>
                <td align="center" className="align-middle">28</td>
                <td align="center">2018-10-27 23:44:07</td>
              </tr>
              <tr>
                <td align="center" className="align-middle">808</td>
                <td align="center" className="align-middle">28</td>
                <td align="center">2018-10-27 23:44:07</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Paper>
    )
  }
}

export default Schedule