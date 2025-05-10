import React from 'react';
import './Skeleton.css'; // Import the CSS file for skeleton styles
const Skeleton = ({ width, height, borderRadius = '4px' }) => {
  return (
    <div
      className="skeleton"
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
