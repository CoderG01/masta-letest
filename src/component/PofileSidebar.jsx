import React from "react";

const PofileSidebar = () => {
  return (
    <div>
      <div className="profileSideWrapper pt-5 pb-4">
        <div className="d-flex">
          <div className="avtar d-flex align-items-center justify-content-center">
            <p className="mb-0">MS</p>
          </div>
          <div className="d-flex align-items-start px-3 justify-content-center font-weight-normal flex-column">
            <h5>Michael Scott</h5>
            <p className="mb-0 font-weight-light">
              michaelscott@dundermifflin.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PofileSidebar;
