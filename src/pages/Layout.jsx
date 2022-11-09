import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className='bg-info'>
        <h1 className='text-danger fst-italic fw-bold'>Welcome To Our Cafe</h1>
        <h4 className='text-primary'>Our Menu</h4>
      </div>
      <nav className='navmenu'>
        <ul className='d-flex justify-content-around'>
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
