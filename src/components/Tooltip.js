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
      className="tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      {children}
      {showTooltip && (
        <div
          className="tooltiptext"
          style={{
            backgroundColor: 'red',
            color: 'white',
            textAlign: 'center',
            borderRadius: '6px',
            padding: '5px',
            position: 'absolute',
            zIndex: '1',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, 10px)',
            minWidth: '120px',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
