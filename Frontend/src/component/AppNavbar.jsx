import React from "react";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  return (
    <div>
      <div className="bg-lime-500 sticky top-0 z-50 left-0 right-0 shadow mb-10">
        <div className="navbar w-11/12 mx-auto ">
          <div className="flex-1">
            <Link to="/" className="md:text-4xl sm:text-3xl font-bold">
              SCRUD
            </Link>
          </div>
          <div className="flex-none ">
            <ul className="menu menu-horizontal px-1 md:text-2xl sm:text-lg font-bold text-white">
              <li>
                <Link to="/">List</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppNavbar;
