import React from 'react'
import cx from 'classnames';
import FloorWrap from '../FloorWrap';
import position from 'constants/position';
import './style.css';

const Building = ({ title, disable }) => {
  const buildingClass = cx('building', { 'building-disable': disable })
  return (
    <div className="d-flex flex-column align-items-center">
      <div styleName={buildingClass}>
        {
          disable ? '' : <FloorWrap position={position} />
        }
      </div>
      <h6 className="p-3">{title}</h6>
    </div>
  )
}

export default Building