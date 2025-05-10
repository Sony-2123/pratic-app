import React from 'react';

const Spinner = () => {
  return (
    <div className="text-center mt-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      <p className="text-sm mt-1">Loading...</p>
    </div>
  );
};

export default Spinner;