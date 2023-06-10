import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { AiOutlineClockCircle, AiOutlineDollarCircle, AiOutlineHeart } from 'react-icons/Ai';
import { BiUserCircle } from 'react-icons/Bi';
import { GrUserSettings } from 'react-icons/Gr';
import { MdPayment } from 'react-icons/Md';
import { RiLogoutCircleLine } from 'react-icons/Ri';
import { Link } from 'react-router-dom';


const UserSidebarMobile = () => {
    const [open, setOpen] = useState(false);

    return (
        // mobile
        <div className='userSidebarMobile d-none px-2 px-md-5 pt-2 px-3'>
            <GrUserSettings fontSize={'30px'} className={"sidebarOpenIcon"} onClick={() => setOpen(!open)} />
            {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button> */}
            <Collapse in={open}>
                <div id="example-collapse-text">
                    <div className="UserSettingList">
                        <ul className="ps-0">
                            <Link to="/profile/" onClick={() => setOpen(false)}>
                                <li className="py-3 px-3">
                                    <BiUserCircle
                                        fontSize={"25px"}
                                        color=""
                                        className="me-4 ms-3"
                                    />
                                    Your Account
                                </li>
                            </Link>
                            <Link to="/profile/history" onClick={() => setOpen(false)}>
                                <li className="py-3 px-3">
                                    <AiOutlineClockCircle
                                        fontSize={"25px"}
                                        color=""
                                        className="me-4 ms-3"
                                    />
                                    History
                                </li>
                            </Link>
                            <Link to="/profile/favorite" onClick={() => setOpen(false)}>
                                <li className="py-3 px-3">
                                    <AiOutlineHeart
                                        fontSize={"25px"}
                                        color=""
                                        className="me-4 ms-3"
                                    />
                                    Favorites
                                </li>
                            </Link>
                            <Link to="/profile/payment" onClick={() => setOpen(false)}>
                                <li className="py-3 px-3">
                                    <MdPayment fontSize={"25px"} color="" className="me-4 ms-3" />
                                    Payment
                                </li>
                            </Link>
                            <Link to="/profile/subscription" onClick={() => setOpen(false)}>
                                <li className="py-3 px-3">
                                    <AiOutlineDollarCircle
                                        fontSize={"25px"}
                                        color=""
                                        className="me-4 ms-3"
                                    />
                                    Subscription plan
                                </li>
                            </Link>
                            <Link to="/yeye" onClick={() => setOpen(false)}>
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
            </Collapse>
        </div>
    )
}

export default UserSidebarMobile
