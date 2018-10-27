import React from 'react'

const ListItem = ({id, room, time, people}) => {
  return (
    <tr>
      <th className="text-center" scope="row">{id}</th>
      <td align="center">{room}</td>
      <td align="center">{time}</td>
      <td align="center">{people}</td>
    </tr>
  )
}

export default ListItem