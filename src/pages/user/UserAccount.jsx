import React, { useEffect, useRef, useState } from "react";
import UserProfileEditRow from "../../component/UserProfileEditRow";
// import "../assets/css/profile.css";

const UserAccount = () => {
  return (
    <React.Fragment>
      <div className="userAccount py-5 ps-1 ps-lg-5">
        <h5 className="fw-bold">Your account</h5>
        <div className="viewInfo mt-4">
          <div className="d-flex align-items-center justify-content-between parts py-3 px-1">
            <div className="d-flex align-items-center justify-content-between">
              <div className="ChagePhoto me-3">MS</div>
              <p className="mb-0">Upload you profile photo</p>
            </div>
            <button className="userEditBtn px-3 py-2">Upload Photo</button>
          </div>
          <UserProfileEditRow
            title={"Name"}
            info={"Michael Scott"}
            btnName={"Edit"}
          />
          <UserProfileEditRow
            title={"Username"}
            info={"Michael Scott"}
            btnName={"Edit"}
          />
          <UserProfileEditRow
            title={"Email id"}
            info={"michaelscott@dundermifflin.com"}
            btnName={"Edit"}
          />
          <UserProfileEditRow
            title={"Password"}
            info={"xxxxxxxx-xxxx"}
            btnName={"Change password"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserAccount;
