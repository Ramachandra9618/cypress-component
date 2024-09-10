import React, { useState } from 'react';
import Alert from './AlertComponet'; 

const App = () => {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
  };

  return (
    <div>
      {showAlert && (
        <Alert
          message="This is an alert message!"
          type="success" // Change to 'error' or 'warning' as needed
          onClose={handleClose}
        />
      )}
      <button onClick={() => setShowAlert(true)}>Show Alert</button>
    </div>
  );
};

export default App;
