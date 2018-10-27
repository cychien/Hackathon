import React from 'react'
import ListItem from './ListItem';

const data = {
  1: {
    id: 1,
    room: '101',
    time: 'time',
    people: 6
  },
  2: {
    id: 2,
    room: '102',
    time: 'time',
    people: 6
  },
  3: {
    id: 3,
    room: '808',
    time: 'time',
    people: 18
  },
}

const MeetingList = () => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th className="text-center">#</th>
          <th className="text-center">借用空間</th>
          <th className="text-center">使用時間</th>
          <th className="text-center">使用人數</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.values(data)
            .map(({id, room, time, people}, i) => 
              <ListItem key={i} id={id} room={room} time={time} people={people} />)
        }
      </tbody>
    </table>
  )
}

export default MeetingList