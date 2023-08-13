import React from "react";
import logo from "../image/logo.svg";
import wallet from "../image/wallet.svg";
import drap from "../image/drop.svg";
import "./Navbar.css";
import { connectionAction } from "../../Redux/connection/actions";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
// import { getRemaintime } from "../../Redux/remaintime/action";
function Navbar() {
  const dispatch = useDispatch();
  const acc = useSelector((state) => state.connect?.connection);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-white p-0">
        <div className="container-fluid py-2 px-2 px-md-5">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon bg-white " />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Stake">
                Stake
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/Buy">
                  Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Swap"
                >
                  Swap
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Lend"
                >
                  Lend
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Borrow"
                >
                  Borrow
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Referrals">
                  Referrals
                </Link>
              </li> */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Ecosystem
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Docs
                </a>
              </li>
            </ul>
            <form
              className="d-flex justify-content-evenly "
              style={{ gap: "10px " }}
            >
              <button className="btn btnnn primary" type="button">
                Trade
              </button>
              <button
                className="btn btnnn "
                type="button"
                onClick={() => {
                  dispatch(connectionAction());
                }}
              >
                <img src={wallet} alt="" />{" "}
                {acc
                  ? acc.substring(0, 4) +
                    "..." +
                    acc?.substring(acc.length - 4)
                  : "Connect Wallet"}
              </button>
              <Dropdown>
                <Dropdown.Toggle
                  className="btn btnnn  d-flex align-items-center"
                  type="button"
                  id="dropdown-basic"
                >
                  <Dropdown.Menu  className=""  style={{backgroundColor:"rgb(0, 6, 60)"}}>
                    <Dropdown.Item className="text-white"  href="#/action-1">Arbitrum</Dropdown.Item>
                    <Dropdown.Item className="text-white" href="#/action-2">Avalanche</Dropdown.Item>
                    <hr className="text-white"/>
                    <Dropdown.Item className="text-white"  href="#/action-3">Setting</Dropdown.Item>
                    <Dropdown.Item  className="text-white" href="#/action-3">Language</Dropdown.Item>
                  </Dropdown.Menu>
                  <img src={drap} alt="" className="me-1" />
                  <span className="border-start ">
                    <svg
                      className=" mb-1"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      color="white"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                    </svg>
                  </span>
                </Dropdown.Toggle>
              </Dropdown>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
