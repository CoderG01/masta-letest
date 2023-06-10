import React, { useEffect } from "react";
import DynemicChart from "../component/DynemicChart";
import EditChart from "./ProtectedRoutes/EditChart";

const CharTtypeEdit = () => {
  return (
    <React.Fragment>
      <div className="ChartTypeSection d-flex align-items-center justify-content-center flex-column pt-2">
        <div className="d-flex gap-5">
          {/* <DynemicChart /> */}
          <EditChart />
        </div>
      </div>
    </React.Fragment>
  );
};

export default CharTtypeEdit;
