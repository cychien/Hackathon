import React from 'react';
import Building from 'components/Building';
import Paper from 'components/Paper'
import Legend from './Legend';

function BuildingWrap({ type }) {
  return (
    <Paper>
      <div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="m-0">各樓層空氣狀況</h3>
          <Legend />
        </div>
        <div className="row">
          <div className="col justify-content-center">
            <Building title="Now" />
          </div>
          <div className="col justify-content-center">
            <Building title={type === 'normal' ? '5 minutes later' : 'Conference'} />
          </div>
        </div>
      </div>
    </Paper>
  )
}

export default BuildingWrap;
