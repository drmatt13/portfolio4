// import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({mobile, redirect, modal, setModal}) => {

  const toggleModal = (s) => {
    modal === s ? setModal(null) : setModal(s)
  }

  return (
    <div className={`master-navbar-container ${mobile ? "navbar-mobile" : "navbar-web"}`}>
    {/* <div className="master-navbar-container"> */}
      <div className="navbar-container">
        <div className="navbar-btn" onClick={() => redirect("/")}>
          <i className="fas fa-home"></i>
        </div>
        <div className="navbar-btn" onClick={() => toggleModal("examples")}>
          <i className="fas fa-laptop-code"></i>
        </div>
        <div className="navbar-btn" onClick={() => toggleModal("contact")}>
          <i className="far fa-address-card"></i>
        </div>
        <div className="navbar-btn" onClick={() => toggleModal("about")}>
          <i className="fas fa-question"></i>
        </div>
        <div className="navbar-btn" onClick={() => toggleModal("settings")}>
          <i className="fas fa-cog"></i>
        </div>
      </div>
    </div>
  )
}

export default Navbar
