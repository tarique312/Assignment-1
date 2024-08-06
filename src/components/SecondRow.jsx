import React from "react";
import ActivityGraph from "./ActivityGraph";
import ActivityTable from "./ActivityTable";

const SecondRow = () => {
  return (
    <div className="row container-fluid mt-3 d-flex justify-content-evenly">
      <div className="col-12 col-md-8 mb-1">
        <div className="card sec-card p-2">
          <h5 className="text-light">Activity</h5>
          <ActivityGraph />
        </div>
      </div>
      <div className="col-12 col-md-4 mb-1">
        <ActivityTable />
      </div>
    </div>
  );
};

export default SecondRow;
