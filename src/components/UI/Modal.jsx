import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ setIsShowModal, title, desc }) => {
  function handleModelClose() {
    setIsShowModal(false);
  }
  return createPortal(
    <div className="modal">
      <div className="modal-overlay" onClick={handleModelClose}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
           <span className="close-button" onClick={handleModelClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">
          <p>{desc}</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleModelClose}
          >
            Kapat
          </button>
          <button type="button" className="btn btn-primary">
            Kaydet
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
    
  );
};

export default Modal;