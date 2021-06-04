import { Suspense, lazy } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const Modal = ({setRoute, modal, setModal, examples}) => {

  const App = lazy(() => import(`./modals/${modal}`));

  return createPortal(<>
    <div className="modal-primary-background fade-in-2">
      <div className="modal-secondary-background" onClick={() => setModal(null)}/>
      <div className="modal-master-container fade-in">
        <div className="modal-exit-btn box-shadow1" onClick={() => setModal(null)}>
          <i className="fas fa-times"></i>
        </div>
          <Suspense fallback={<>Loading</>}>
            <App setRoute={setRoute} examples={examples} />
          </Suspense>
      </div>
    </div>
  </>, document.getElementById('modal'));
}

export default Modal;
