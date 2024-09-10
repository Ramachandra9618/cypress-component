import React, { useState } from 'react';

const AlertDemo = () => {
  const [alertResult, setAlertResult] = useState('');
  const [confirmResult, setConfirmResult] = useState('');
  const [promptResult, setPromptResult] = useState('');

  const handleAlert = () => {
    // Show an alert dialog
    window.alert("This is a simple alert!");
    setAlertResult("Alert was shown and dismissed");
  };

  const handleConfirm = () => {
    // Show a confirm dialog
    const result = window.confirm("Do you confirm this action?");
    setConfirmResult(result ? "Action confirmed" : "Action cancelled");
  };

  const handlePrompt = () => {
    // Show a prompt dialog and handle the user input
    const name = window.prompt("Please enter your name:", "John Doe");
    if (name !== null) {
      setPromptResult(`Hello, ${name}!`);
    } else {
      setPromptResult("You cancelled the prompt");
    }
  };

  return (
    <div>
      <h1>JavaScript Alerts in React</h1>
      
      <div>
        <h2>Alert</h2>
        <button onClick={handleAlert}>Show Alert</button>
        <p>Result: {alertResult}</p>
      </div>

      <div>
        <h2>Confirm</h2>
        <button onClick={handleConfirm}>Show Confirm</button>
        <p>Result: {confirmResult}</p>
      </div>

      <div>
        <h2>Prompt</h2>
        <button onClick={handlePrompt}>Show Prompt</button>
        <p>Result: {promptResult}</p>
      </div>
    </div>
  );
};

export default AlertDemo;
