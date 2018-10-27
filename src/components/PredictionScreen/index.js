import React from 'react'
import BuildingWrap from 'components/BuildingWrap';
import Schedule from 'components/PredictionScreen/Schedule'
import cx from 'classnames'

const PredictionScreen = ({type, switchType}) => {
  return (
    <div className='container'>
      <div className='btn-group mt-3 '>
        <button
          className={cx('btn', {'btn-primary': type === 'normal', 'btn-outline-primary': type !== 'normal'})}
          onClick={() => switchType('normal')}
        >
          Normal
        </button>
        <button
          className={cx('btn', {'btn-primary': type === 'plusPeople', 'btn-outline-primary': type !== 'plusPeople'})}
          onClick={() => switchType('plusPeople')}
        >
          Plus People
        </button>
      </div>
      {
        (type === 'normal') && (
          <div className='row'>
            <div className='col-12'>
              <BuildingWrap type={type} />
            </div>
          </div>
      )}
      {
        (type === 'plusPeople') && (
          <div className='row'>
            <div className='col-9'>
              <BuildingWrap type={type} />
            </div>
            <div className='col-3'>
              <Schedule />
            </div>
          </div>
      )}
    </div>
  )
}

export default PredictionScreen