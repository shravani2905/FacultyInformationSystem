import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../../redux/slices/userAdminSlice";

function Navbar() {
  const { loginUserStatus, currentUser } = useSelector(
    (state) => state.userAdminLoginReducer
  );
  const dispatch = useDispatch();
  function signout() {
    dispatch(resetState());
  }

  return (
    <div className="navbar">
      <img
        src="https://www.careerguide.com/career/wp-content/uploads/2023/09/VNR-VJIET.png"
        width="200px"
        height="70px"
        alt="Logo"
      />
      <ul className="List">
        {loginUserStatus === false ? (
          <>
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{ color: "white" }}>
              <button className="btn nav button">HOME</button>
              </NavLink>
            </li>
            <li>
              <Link to="/signup">
                <button className="btn nav button">Sign up</button>
              </Link>
            </li>
            <li>
              <Link to="/signin">
                <button className="btn nav button">Login</button>
              </Link>
            </li>
          </>
        ) : (
          <>
        
            <li>
            <span className="lead  fs-4 me-3 fw-1"  style={{  color: "#A1DD70" ,fontSize:'1.3rem',textTransform:'capitalize',fontFamily:'fantasy'}}>{currentUser.facultyId}
                   <sup style={{ color:"#F6EEC9",fontSize:'1rem'}}>({currentUser.userType})</sup>
                   </span>
            </li>
            
            <li className="nav-item">
            <NavLink
                className="nav-link"
                to="/signin"
                style={{ color: "white" }}
                onClick={signout}
              >
                <button className="btn nav button">Sign Out</button>
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Navbar;