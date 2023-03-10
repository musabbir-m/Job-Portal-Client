import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const itmes = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>
      </li>
      <li>
        {" "}
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact"> Contact Us</Link>
      </li>
      {
        user?.uid?(
            <button className="font-semibold" onClick={handleLogOut}>
            Logout
          </button>
        ):(<li>
            {" "}
            <Link to="/signup">Sign Up</Link>
          </li>)
      }
     

      {/* <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {itmes}
          </ul>
        </div>
        <Link className="btn btn-ghost" to='/'>JobsPortal</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-2">{itmes}</ul>
      </div>
      <div className="navbar-end mr-5">
        <a className="">Jobseeeker</a>
      </div>
    </div>
  );
};

export default Navbar;
