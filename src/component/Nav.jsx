import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import Form from "react-bootstrap/Form";
import CommonButton from "./CommonButton";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseSquare } from "react-icons/Ai";

import Modal from "react-bootstrap/Modal";
import SearchBar from "./SearchBar";

const Nav = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState(true);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const userEmail = localStorage.getItem('username')
  const userPassword = localStorage.getItem('userpassword')
  
  const handleSignOut = () => {
    localStorage.clear();
    navigate('/')
  }

  return (
    <React.Fragment>
      <header>
        <nav className={`mx-auto d-flex justify-content-between px-4 pe-2`}>
          <div className="navLeft-side" onClick={() => navigate("/")}>
            <img
              src="/navlogo.png"
              width="30"
              height="30"
              className="d-inline-block align-top nav-logo me-3"
              alt="React Bootstrap logo"
            />
            <Link rel="stylesheet" href="" className="nav-title">
              masta
            </Link>
          </div>
          {/* pc */}
          <div className="d-flex align-items-center navRight-side d-block">
            <ul className="d-flex justify-content-between align-items-center mb-0 gap-2 px-3">
              <li className="navbar-link">
                <Link to="/topcharts">Top Charts</Link>
              </li>
              <li className="navbar-link">
                <Link to="/charttypes">Chart Types</Link>
              </li>
              <li className="navbar-link">
                <Link to="/plans&pricing">Plans & Pricing</Link>
              </li>
              <li className="navbar-link">
                <Link to="/faq">FAQs</Link>
              </li>
              <li className="navbar-link">
                <Link to="/templates">Templates</Link>
              </li>
            </ul>
            {/* search bar */}
            <SearchBar pname={'Search by chart type'}/>
            {!userEmail && !userPassword ? (
              <div className="d-flex">
                <CommonButton name={"Log In"} path={"login"} />
                <CommonButton
                  name={"Sign Up"}
                  bgColor={"#06ABC8"}
                  fColor={"white"}
                  path={"signup"}
                />
              </div>
            ) : (
              ""
            )}
          </div>
          {!userEmail && !userPassword ? (
            " "
          ) : (
            <div className="d-flex align-items-center justify-content-center gap-4 userWrapper">
              <img
                src="/heartIcon.png"
                alt="heart icon"
                className="navbarHeartIcon"
              />
              {/* <Link to="/userSetting">
                <div className="avatarWrap d-flex align-items-center justify-content-center p-1">
                  <p className="mb-0 bg-blue">MS</p>
                </div>
              </Link> */}
              <div
                className="avatarWrap d-flex align-items-center justify-content-center p-1"
                onClick={handleShowModal}
              >
                <p className="mb-0 bg-blue">MS</p>
              </div>
              <Modal
                show={showModal}
                onHide={handleCloseModal}
                animation={false}
                className={"useAccountProfileModal"}
              >
                <Modal.Body className="py-3 pt-4 px-0">
                  {/* close modal icon */}
                  {/* <AiOutlineCloseSquare
                    fontSize={"30px"}
                    className="closeModalIcon"
                    onClick={handleCloseModal}
                  /> */}
                  <div className="d-flex gap-2 profileBoxWrap pb-3 px-3">
                    <div className="avatarWrap d-flex align-items-center justify-content-center p-1 largeAvtar">
                      MS
                    </div>
                    <div className="d-flex align-items-start flex-column justify-content-center">
                      <h6 className="fw-bold">Michael Scott</h6>
                      <p className="mb-0">michaelscott@dundermifflin.c...</p>
                    </div>
                  </div>
                  <div className="profileBoxLink pt-2">
                    <div>
                      <div style={{ borderBottom: "1px solid #dfdfdf" }}>
                        <p
                          className="px-4 userProfileLink py-3"
                          onClick={() => navigate("/profile")}
                        >
                          Account Settings
                        </p>
                        <p className="px-4 userProfileLink py-3">Get help</p>
                      </div>
                      <div>
                        <p className="px-4 userProfileLink py-3">
                          Privacy Policy
                        </p>
                        <p className="px-4 userProfileLink py-3" onClick={() => handleSignOut()}>Sign out</p>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          )}

          {/* mobile */}
          <div
            className="menu_icon me-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#side_bar"
            aria-controls="side_bar"
            onClick={handleShow}
          >
            <div className="top_bar"></div>
            <div className="middel_bar"></div>
            <div className="bottom_bar"></div>
          </div>
          {/* offcnvas */}
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="p-3">
              <Form className="d-flex position-relative">
                <Form.Control
                  type="search"
                  placeholder=" &#128269;  Search by chart type"
                  className="me-2 searchInput w-100 mx-3"
                  aria-label="Search"
                />
              </Form>
              <div className="d-flex align-items-center navRight-side mobile-menu gap-5">
                <ul className="d-flex justify-content-center align-items-center mb-0 gap-2 px-3 flex-column py-3">
                  <li className="navbar-link d-flex" onClick={handleClose}>
                    <Link
                      to="/profile"
                      className="h-auto d-flex flex-column gap-3 align-items-center"
                    >
                      <div className="avatarWrap d-flex align-items-center justify-content-center p-1 mobileUserAvatar">
                        <p className="mb-0 bg-blue">MS</p>
                      </div>
                      <span>Harsh Goswami</span>
                    </Link>
                  </li>
                  <li className="navbar-link" onClick={handleClose}>
                    <Link to="/topcharts">Top Charts</Link>
                  </li>
                  <li className="navbar-link" onClick={handleClose}>
                    <Link to="/charttypes">Chart Types</Link>
                  </li>
                  <li className="navbar-link" onClick={handleClose}>
                    <Link to="/plans&pricing">Plans & Pricing</Link>
                  </li>
                  <li className="navbar-link" onClick={handleClose}>
                    <Link to="/faq">FAQs</Link>
                  </li>
                  <li className="navbar-link" onClick={handleClose}>
                    <Link to="/templates">Profile</Link>
                  </li>
                </ul>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Nav;
