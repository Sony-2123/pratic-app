import React from 'react';

const InlineStyleExample = () => {
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px'
  };

  return (
    <div>
      <button style={buttonStyle}>Click Me</button>
    </div>
  );
};

export default InlineStyleExample;
