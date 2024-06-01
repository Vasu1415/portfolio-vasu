import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 border-b border-red-500'
    : 'text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500';
  
  return (
    <button onClick={selectTab} className={`mr-3 font-bold ${buttonClasses}`}>
      {children}
    </button>
  );
};

export default TabButton;
