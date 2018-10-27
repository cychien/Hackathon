import React from 'react';
import Paper from 'components/Paper'
import MeetingForm from 'components/MeetingForm';
import MeetingList from 'components/MeetingList';
import Building from 'components/Building';

function BuildingWrap() {
  return (
    <Paper>
      <h3 className="pb-3">各樓層空氣狀況</h3>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <Building title="現在" />
        </div>
        <div className="col d-flex justify-content-center">
          <Building title="5分鐘後" />
        </div>
        <div className="col d-flex justify-content-center">
          <Building title="開會" disable />
        </div>
      </div>
      <MeetingList />
      <MeetingForm />
    </Paper>
  )
}

export default BuildingWrap;
