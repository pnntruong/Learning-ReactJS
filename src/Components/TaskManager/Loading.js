import React from 'react';

const Loading = ({className, color}) => {
  return (
    <div className={`${className} border-4 w-10 h-10 rounded-full border-${color || "orange"}-300 border-r-transparent animate-spin`}>
    </div>
  );
};

export default Loading;