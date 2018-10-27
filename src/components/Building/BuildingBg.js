import React from 'react'
import cx from 'classnames';
import FloorWrap from './FloorWrap';
import position from 'constants/position';
import './style.css';

const BuildingBg = ({ disable }) => {
  const buildingBgClass = cx('building-bg', {'building-disable': disable})
  return (
    <div 
      styleName={buildingBgClass}
      // styleName={`building-bg ${disable ? 'disable' : ''}`}
    >
      {
        disable ? '' : <FloorWrap position={position} />
      }
    </div>
  )
}

export default BuildingBg