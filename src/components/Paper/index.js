import React from 'react'
import cx from 'classnames'
import './style.css'

const Paper = ({ children, className, myRef }) =>
  <div className={cx('p-4', className)} styleName='paper' ref={myRef}>
    {children}
  </div>

export default Paper