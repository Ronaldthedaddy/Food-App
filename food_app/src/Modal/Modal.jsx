import React from 'react'
import "./style.modules.css";
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children, className }) => {
  const modalStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'flex' : 'none',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return isOpen
    ? ReactDOM.createPortal(
        <div style={modalStyles}>
          <div className={className} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px' }}>
            {children}
            {/* <button style={x} onClick={onClose}>x</button> */}
          </div>
        </div>,
        document.body
      )
    : null;
};
export default Modal;
