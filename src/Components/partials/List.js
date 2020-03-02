import React from 'react';

const List = props => {
  return (
    <div className="launches">
      <div className="lunchContent"></div>
      <h5 className="launchId">{props.data.id}</h5>
      <h5 className="missionName">{props.data.mission_name}</h5>
    </div>
  );
};

export default List;
