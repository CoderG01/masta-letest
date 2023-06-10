import React from "react";
import { BiUserCircle } from "react-icons/Bi";
import { AiOutlineClockCircle } from "react-icons/Ai";
import { AiOutlineHeart } from "react-icons/Ai";
import { MdPayment } from "react-icons/Md";
import { AiOutlineDollarCircle } from "react-icons/Ai";
import { RiLogoutCircleLine } from "react-icons/Ri";
import { Link } from "react-router-dom";
import PofileSidebar from "./PofileSidebar";

const UserSettingPageLink = () => {
  return (
    <React.Fragment>
      <div className="me-4 profileSidebar">
        <PofileSidebar />
        <div className="UserSettingList">
          <ul className="ps-0">
            <Link to="/profile/">
              <li className="py-3 px-3">
                <BiUserCircle
                  fontSize={"25px"}
                  color=""
                  className="me-4 ms-3"
                />
                Your Account
              </li>
            </Link>
            <Link to="/profile/history">
              <li className="py-3 px-3">
                <AiOutlineClockCircle
                  fontSize={"25px"}
                  color=""
                  className="me-4 ms-3"
                />
                History
              </li>
            </Link>
            <Link to="/profile/favorite">
              <li className="py-3 px-3">
                <AiOutlineHeart
                  fontSize={"25px"}
                  color=""
                  className="me-4 ms-3"
                />
                Favorites
              </li>
            </Link>
            <Link to="/profile/payment">
              <li className="py-3 px-3">
                <MdPayment fontSize={"25px"} color="" className="me-4 ms-3" />
                Payment
              </li>
            </Link>
            <Link to="/profile/subscription">
              <li className="py-3 px-3">
                <AiOutlineDollarCircle
                  fontSize={"25px"}
                  color=""
                  className="me-4 ms-3"
                />
                Subscription plan
              </li>
            </Link>
            <Link to="/yeye">
              <li className="py-3 px-3">
                <RiLogoutCircleLine
                  fontSize={"25px"}
                  color=""
                  className="me-4 ms-3"
                />
                Log Out
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserSettingPageLink;
