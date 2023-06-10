import React from "react";
import "../assets/css/profile.css";
import UserSettingPageLink from "../../../component/UserSettingPageLink";

const Profile = () => {
  return (
    <React.Fragment>
      <section className="profileWrapper mx-auto px-0 px-xl-5 pt-4 d-block d-md-flex">
        {/* desktop view sidebar */}
        <div className="row w-100">
          <div className="col-md-12 col-xl-5 col-xxl-4">
            {/* <UserSettingPageLink /> */}
          </div>
          <div className="col-md-12 col-xl-7 col-xxl-8">
            <UserSettingPageLink />
          </div>
        </div>
        {/* tabpanel */}
      </section>
    </React.Fragment>
  );
};

export default Profile;
