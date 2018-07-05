import React from 'react'
import './style.css'

const Loading = ({ text }) => (
  <div className='text-center text-muted' styleName='loading'>
    <div><i className='fas fa-circle-notch fa-spin fa-2x' /></div>
    <div>{text || ''}</div>
  </div>
)

export default Loading
