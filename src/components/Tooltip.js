// Tooltip.js
import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block',margin:"30px"}}
    >
      {children}
      {showTooltip && (
        <span
          style={{
            // visibility: 'visible',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '6px',
            padding: '5px',
            position: 'absolute',
            zIndex: '1',
            bottom: '125%',
            marginLeft: '-60px',
            opacity: '1',
            transition: 'opacity 0.3s',
          }}
        >
          {text}
        </span>
      )}
    </div>
  );
};

export default Tooltip;
