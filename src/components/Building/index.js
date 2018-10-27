import React from 'react';
import BuildingBg from './BuildingBg';

function Building() {
  return (
    <div className="row">
      <div className="col d-flex justify-content-center">
        <BuildingBg />
      </div>
      <div className="col d-flex justify-content-center">
        <BuildingBg />
      </div>
      <div className="col d-flex justify-content-center">
        <BuildingBg disable />
      </div>
    </div>
  )
}

export default Building;
