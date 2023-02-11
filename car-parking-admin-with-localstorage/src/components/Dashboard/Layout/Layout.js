import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { Outlet } from "react-router-dom";
import Search from "../../Snippets/Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";

const Layout = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

  const setIsSideMenuOpenFunction = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const itemSearch = (value) => {
    console.log(value);
  };

  return (
    <>
      <Sidebar isSideMenuOpen={isSideMenuOpen} />
      <div className={!isSideMenuOpen ? "side-menu-open dashboard" : "dashboard"}>
        <div className="dash-header">
          <div className="menu-icon">
            <span>
              <GrMenu onClick={setIsSideMenuOpenFunction} />
            </span>
          </div>
          <Search itemSearch={itemSearch} placeholder="Search.." />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
