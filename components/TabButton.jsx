import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-500 to-yellow-500 border-b border-red-500 font-semibold'
    : 'text-transparent text-white font-semibold';
  
  return (
    <button onClick={selectTab} className={`mr-3 font-bold ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default TabButton;
