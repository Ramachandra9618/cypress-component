import React from 'react';

const List = ({ items }) => {
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const listItemStyle = {
    padding: '10px',
    background: '#f9f9f9',
    borderBottom: '1px solid #ddd',
    fontSize: '16px',
  };

  return (
    <ul style={listStyle}>
      {items.map((item, index) => (
        <li key={index} style={listItemStyle}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
