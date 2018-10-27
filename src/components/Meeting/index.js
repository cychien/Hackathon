import React from 'react'

const Meeting = () => {
  return (
    <form className="form d-flex align-items-end">
      <div className="form-group px-3 m-0">
        <label for="meetingRoom">欲借用空間</label>
        <input type="text" className="form-control" id="meetingRoom" placeholder="101" />
      </div>
      <div className="form-group px-3 m-0">
        <label for="meetingTime">使用時間</label>
        <input type="password" className="form-control" id="meetingTime" placeholder="Password" />
      </div>
      <div className="form-group px-3 m-0">
        <label for="meetingPeople">使用人數</label>
        <input type="number" className="form-control" id="meetingPeople" placeholder="6" min="1" />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">新增開會</button>
      </div>
    </form>
  )
}

export default Meeting