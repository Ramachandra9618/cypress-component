import React from 'react';

const Card = ({ title, description, image }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    margin: '20px auto',
  };

  const imgStyle = {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '20px',
    marginBottom: '10px',
  };

  const descStyle = {
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={title} style={imgStyle} />
      <h2 style={titleStyle}>{title}</h2>
      <p style={descStyle}>{description}</p>
    </div>
  );
};

export default Card;
