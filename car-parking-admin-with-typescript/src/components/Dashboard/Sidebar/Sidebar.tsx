/* eslint-disable react/prop-types */
import { AiFillCar } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isSideMenuOpen }: { isSideMenuOpen: boolean }) => {
  return (
    <div className={!isSideMenuOpen ? "sidebar-closed sidebar" : "sidebar"}>
      <div className="nav-menu">
        <NavLink
          to=""
          end
          className={({ isActive }) => (isActive ? "menu-active-class" : "no-active-class")}
        >
          <div className="menu-list">
            <div className="menu-list-left">
              <span className="menu-list-left-icon">
                <BiCategory />
              </span>
              <span className={!isSideMenuOpen ? "sidebar-closed-menu" : "menu-list-left-text"}>
                Dashboard
              </span>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="list"
          className={({ isActive }) => (isActive ? "menu-active-class" : "no-active-class")}
        >
          <div className="menu-list ">
            <div className="menu-list-left">
              <span className="menu-list-left-icon">
                <IoCarSport />
              </span>
              <span className={!isSideMenuOpen ? "sidebar-closed-menu" : "menu-list-left-text"}>
                Vehicles List
              </span>
            </div>
          </div>
        </NavLink>
        <NavLink
          to="add"
          className={({ isActive }) => (isActive ? "menu-active-class" : "no-active-class")}
        >
          <div className="menu-list ">
            <div className="menu-list-left">
              <span className="menu-list-left-icon">
                <AiFillCar />
              </span>
              <span className={!isSideMenuOpen ? "sidebar-closed-menu" : "menu-list-left-text"}>
                Add Vehicle
              </span>
            </div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
