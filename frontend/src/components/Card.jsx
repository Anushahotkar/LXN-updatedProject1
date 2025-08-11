import React from 'react';

const Card = ({ children, className = '', padded = true }) => (
  <div
    className={`
      bg-white dark:bg-cardDark rounded-xl shadow-md dark:shadow-lg overflow-hidden
      transition-all duration-300
      ${padded ? 'p-5' : ''}
      hover:shadow-xl hover:scale-[1.02]
      ${className}
    `}
  >
    {children}
  </div>
);

export default Card;
