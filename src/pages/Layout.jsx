import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className='navmenu bg-dark'>
        <h4 className='text-danger pb-2 text-decoration-underline fst-italic'>
          Our Menu
        </h4>
        <ul className='d-flex justify-content-around pt-2'>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "burlywood",
              })}
              end
              to='/'
            >
              Breakfast
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "burlywood",
              })}
              to='lunch'
            >
              Lunch
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "burlywood",
              })}
              to='dinner'
            >
              Dinner
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "blue" : "burlywood",
              })}
              to='coffee'
            >
              Coffee
            </NavLink>
          </li>
        </ul>
        <hr />
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
