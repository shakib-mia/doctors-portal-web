import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Navbar.css";

const Navbar = () => {
      const name = localStorage.getItem('name');
      const googleName = localStorage.getItem("googleUser");

      const handleSignOut = () => {
            signOut(auth);
            localStorage.removeItem('name')
            localStorage.removeItem('googleUser')
            window.location.reload()
      }

      const menuItems = <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/appointment">Appointment</NavLink></li>
            <li><NavLink to="/reviews">Reviews</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            {
                  name && <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            }

            {
                  googleName
                        ?
                        <span>{googleName} <button onClick={handleSignOut} className='btn btn-primary'>Log Out</button></span>
                        :
                        name
                              ?
                              name
                              :
                              <li>
                                    <NavLink to="/login">Log In</NavLink>
                              </li>
            }

      </>
      return (
            <div className="shadow-lg">
                  <div className="navbar bg-base-100 container mx-auto">
                        <div className="navbar block">
                              <div className="dropdown flex justify-between">
                                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-72 right-0 shadow bg-base-100 rounded w-52">
                                          {menuItems}
                                    </ul>
                                    <Link to="/" className="btn btn-ghost normal-case text-xl justify-center lg:justify-start">Doctors Portal</Link>
                              </div>
                        </div>
                        <div className="navbar-start hidden lg:flex">
                              <ul className="menu menu-horizontal p-0">
                                    {menuItems}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <label htmlFor="dashboard-sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                        </div>
                  </div>

            </div>
      );
};

export default Navbar;