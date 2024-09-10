import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message, type, onClose }) => {
  // Define styles for different alert types
  const getAlertStyles = () => {
    switch (type) {
      case 'success':
        return {
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
        };
      case 'error':
        return {
          backgroundColor: '#f8d7da',
          color: '#721c24',
          border: '1px solid #f5c6cb',
        };
      case 'warning':
        return {
          backgroundColor: '#fff3cd',
          color: '#856404',
          border: '1px solid #ffeeba',
        };
      default:
        return {};
    }
  };

  const alertStyles = {
    ...getAlertStyles(),
    padding: '16px',
    margin: '16px 0',
    borderRadius: '4px',
    position: 'relative',
    fontFamily: 'Arial, sans-serif',
  };

  const closeButtonStyles = {
    position: 'absolute',
    top: '8px',
    right: '16px',
    border: 'none',
    background: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  };

  return (
    <div style={alertStyles}>
      <span>{message}</span>
      <button style={closeButtonStyles} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
