import React from 'react';

const Spinner = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-25 h-25 bg-orange-500 rounded-md animate-spin"></div>
      </div>
    );
  };
  
  export default Spinner;
