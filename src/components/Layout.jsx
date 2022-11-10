import React from "react";
import { NavLink } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className='header p-4'>
        <h1 data-text="Welcome To Our Cafe" className='text-info fst-italic mb-0'>Welcome To Our Cafe</h1>
      </div>
      <nav className='navmenu'>
        <h4 className='text-danger pb-2 text-decoration-underline fst-italic pb-4'>
          Our Menu
        </h4>
        <ul className='d-flex justify-content-around pt-2'>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "burlywood",
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
                color: isActive ? "yellow" : "burlywood",
              })}
              to='lunch'
            >
              Lunch
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "burlywood",
              })}
              to='dinner'
            >
              Dinner
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "yellow" : "burlywood",
              })}
              to='coffee'
            >
              Coffee
            </NavLink>
          </li>
        </ul>
        <hr />
      </nav>
    </div>
  );
}

export default Layout;
