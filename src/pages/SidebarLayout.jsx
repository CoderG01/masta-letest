import React from "react";
import UserSettingPageLink from "../component/UserSettingPageLink";
import { Outlet } from "react-router-dom";
import "../assets/css/profile.css";
import UserSidebarMobile from "../component/UserSidebarMobile";

export default function SidebarLayout() {
  return (
    <React.Fragment>
      <div className="userSetting">
        <UserSettingPageLink />
        <UserSidebarMobile />
        <Outlet />
      </div>
    </React.Fragment>
  );
}
