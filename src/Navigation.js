import React from 'react';
import { Link } from 'react-router-dom';
import UserAccount from './File/UserAccount';

const Navigation = () => {
  return (
    <>
      <div className="bgimg">
        <nav className="navbar bg-dark navbar-dark navbar-expand-md">
          <div className="container">
            <h2 className="Htitle "> GANESHGARMENT </h2>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="collapseNavbar" className="collapse navbar-collapse text-center">
              <ul className="navbar-nav ml-auto" style={{textTransform:'uppercase'}}>
                <li className="nav-item">
                  <Link to="/Home" className="navlink nav-link text-white">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Customer" className="navlink nav-link text-white">Customers</Link>
                </li>
                <li className="nav-item">
                  <Link to="/AboutUs" className="navlink nav-link text-white">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/ContactUs" className="navlink nav-link text-white">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <UserAccount/>
        </nav>
      </div>
    </>
  )
}

export default Navigation;
