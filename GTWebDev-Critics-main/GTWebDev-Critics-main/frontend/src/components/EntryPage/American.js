import React from 'react';
import './Food.css';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function American() {
  return (
    <div className="image-containerA">
      <div className="image-label-container">
        <div className="image-label">American</div>
        <IconButton className="arrow-button">
          <ArrowForwardIcon className="arrow-icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default American;