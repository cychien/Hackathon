import React from 'react'

const ListItem = ({id, room, time, people}) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{room}</td>
      <td>{time}</td>
      <td>{people}</td>
    </tr>
  )
}

export default ListItem