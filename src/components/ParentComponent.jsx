import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello');

  const handleChangeMessage = () => {
    setMessage('Hello, World!');
  };

  return (
    <div>
      <button  color='red' onClick={handleChangeMessage}>Change Message</button>
      <ChildComponent message={message} />
    </div>
  );
};

export default ParentComponent;
