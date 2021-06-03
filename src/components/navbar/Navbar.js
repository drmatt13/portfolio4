import { useEffect, useCallback, useRef } from 'react';
import './Navbar.css';

const Navbar = ({mobile, masterContainer, redirect, modal, setModal}) => {

  const masterNavbarRef = useRef();

  const toggleModal = useCallback((s) => {
    modal === s ? setModal(null) : setModal(s)
  }, [modal, setModal]);

  const navbarShift = useCallback((div1, div2) => {
    if (div1.scrollHeight > div1.clientHeight) div2.classList.add("navbar-web-shift");
    else div2.classList.remove("navbar-web-shift")
  }, []);


  useEffect(() => {
    if (masterContainer) 
      if (!mobile) {
        navbarShift(masterContainer, masterNavbarRef.current);
        window.addEventListener("resize", () => {
          navbarShift(masterContainer, masterNavbarRef.current);
        });
      }
  }, [mobile, masterContainer, navbarShift])

  return (
    <div className={`master-navbar-container ${mobile ? "navbar-mobile" : "navbar-web"}`} ref={masterNavbarRef}>
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
  )
}

export default Navbar
