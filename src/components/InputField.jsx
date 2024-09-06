import React, { useState } from 'react';

const InputField = ({ label, type, placeholder }) => {
  const [value, setValue] = useState('');

  const inputGroupStyle = {
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const labelStyle = {
    fontSize: '14px',
    fontWeight: 'bold',
  };

  return (
    <div style={inputGroupStyle}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        style={inputStyle}
      />
      <p>Current value: {value}</p>
    </div>
  );
};

export default InputField;
