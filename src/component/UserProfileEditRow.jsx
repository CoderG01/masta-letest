import React from "react";

const UserProfileEditRow = ({ title, info, btnName }) => {
  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-between parts py-4 px-1 smallBtn">
        <div>
          <h5 className="mb-2">{title}</h5>
          <p className="mb-0">{info}</p>
        </div>
        <button className="userEditBtn px-4 py-2">{btnName}</button>
      </div>
    </React.Fragment>
  );
};

export default UserProfileEditRow;
