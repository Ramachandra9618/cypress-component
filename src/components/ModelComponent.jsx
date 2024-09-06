import React, { useState } from 'react';

const Modal = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    background: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && (
        <div style={modalStyle}>
          <div style={modalContentStyle}>
            <h2>{title}</h2>
            <div>{children}</div>
            <button style={buttonStyle} onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
