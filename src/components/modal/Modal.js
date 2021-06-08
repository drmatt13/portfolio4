import { useRef, useCallback, Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({mobile, setRoute, modal, setModal, examples}) => {

  const modalExitRef = useRef();
  const App = lazy(() => import(`./modals/${modal}`));
  const addHighlight = useCallback((div) => div.classList.add("mobile-exit-highlight"), []);
  const removeHighlight = useCallback((div) => div.classList.remove("mobile-exit-highlight"), []);

  return createPortal(<>
    <div className="modal-primary-background fade-in-2">
      <div className="modal-secondary-background" onClick={() => setModal(null)}/>
      <div className="modal-master-container fade-in">
        <div 
          ref={modalExitRef}
          className={`modal-exit-btn box-shadow1 ${!mobile ? "modal-exit-hover" : ""}`} 
          onClick={() => setModal(null)}
          onTouchStart={() => addHighlight(modalExitRef.current)}  
          onTouchEnd={() => removeHighlight(modalExitRef.current)}  
        >
          <i className="fas fa-times"></i>
        </div>
          <Suspense fallback={<></>}>
            <App setRoute={setRoute} examples={examples} />
          </Suspense>
      </div>
    </div>
  </>, document.getElementById('modal'));
}

export default Modal;
