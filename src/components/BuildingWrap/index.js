import React from 'react';
import MeetingForm from 'components/MeetingForm';
import MeetingList from 'components/MeetingList';
import Building from 'components/Building';
import Paper from 'components/Paper'

function BuildingWrap({type}) {
  return (
    <Paper>
      <div>
        <label>各樓層空氣狀況</label>
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
