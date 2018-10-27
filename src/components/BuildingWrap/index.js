import React from 'react';
import MeetingForm from 'components/MeetingForm';
import MeetingList from 'components/MeetingList';
import Building from 'components/Building';

function BuildingWrap() {
  return (
    <div className="my-5">
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
    </div>
  )
}

export default BuildingWrap;
