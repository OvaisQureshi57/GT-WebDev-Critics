import React from 'react';
import './Food.css';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Mexican() {
  return (
    <div className="image-containerM">
      <div className="image-label-container">
        <div className="image-label">Mexican</div>
        <IconButton className="arrow-button">
          <ArrowForwardIcon className="arrow-icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Mexican;