import { createPortal } from 'react-dom';
import './Modal.css';

import Examples from '../examples/Examples';
import Contact from '../contact/Contact';
import About from '../about/About';
import Settings from '../settings/Settings';

const Modal = ({setRoute, modal, setModal, examples}) => {

  return createPortal(<>
    <div className="modal-primary-background fade-in-2">
      <div className="modal-secondary-background" onClick={() => setModal(null)}/>
      <div className="modal-master-container fade-in">
        <div className="modal-exit-btn box-shadow1" onClick={() => setModal(null)}>
          <i className="fas fa-times"></i>
        </div>
        {modal === "examples" && <Examples setRoute={setRoute} examples={examples} />}
        {modal === "contact" && <Contact />}
        {modal === "about" && <About />}
        {modal === "settings" && <Settings />}
      </div>
    </div>
  </>, document.getElementById('modal'))
}

export default Modal
