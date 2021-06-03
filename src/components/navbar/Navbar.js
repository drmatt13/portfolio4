import { useEffect, useCallback, useRef } from 'react';
import './Navbar.css';

const Navbar = ({mobile, masterContainer, redirect, modal, setModal}) => {

  const masterNavbarRef = useRef(),
        homeRef = useRef(),
        codeRef = useRef(),
        contactRef = useRef(),
        aboutRef = useRef(),
        settingsRef = useRef();

  const toggleModal = useCallback((s) => modal === s ? setModal(null) : setModal(s), [modal, setModal]);
  const addHighlight = useCallback((div) => div.classList.add("navbar-mobile-highlight"), []);
  const removeHighlight = useCallback((div) => div.classList.remove("navbar-mobile-highlight"), []);
  const navbarShift = useCallback((div1, div2) => {
    if (div1.scrollHeight > div1.clientHeight) div2.classList.add("navbar-web-shift");
    else div2.classList.remove("navbar-web-shift")
  }, []);

  useEffect(() => {
    if (masterContainer) 
      if (!mobile) {
        navbarShift(masterContainer, masterNavbarRef.current);
        window.addEventListener("resize", () => navbarShift(masterContainer, masterNavbarRef.current));
      }
  }, [mobile, masterContainer, navbarShift]);

  return (
    <div className={`master-navbar-container ${mobile ? "navbar-mobile" : "navbar-web"}`} ref={masterNavbarRef}>
      <div className="navbar-btn" ref={homeRef} onClick={() => redirect("/")} onTouchStart={() => addHighlight(homeRef.current)} onTouchEnd={() => removeHighlight(homeRef.current)}>
        <i className="fas fa-home"></i>
      </div>
      <div className="navbar-btn" ref={codeRef} onClick={() => toggleModal("examples")} onTouchStart={() => addHighlight(codeRef.current)} onTouchEnd={() => removeHighlight(codeRef.current)}>
        <i className="fas fa-laptop-code"></i>
      </div>
      <div className="navbar-btn" ref={contactRef} onClick={() => toggleModal("contact")} onTouchStart={() => addHighlight(contactRef.current)} onTouchEnd={() => removeHighlight(contactRef.current)}>
        <i className="far fa-address-card"></i>
      </div>
      <div className="navbar-btn" ref={aboutRef} onClick={() => toggleModal("about")} onTouchStart={() => addHighlight(aboutRef.current)} onTouchEnd={() => removeHighlight(aboutRef.current)}>
        <i className="fas fa-question"></i>
      </div>
      <div className="navbar-btn" ref={settingsRef} onClick={() => toggleModal("settings")} onTouchStart={() => addHighlight(settingsRef.current)} onTouchEnd={() => removeHighlight(settingsRef.current)}>
        <i className="fas fa-cog"></i>
      </div>
    </div>
  )
}

export default Navbar
