import React from 'react';
import './Food.css';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Chinese() {
  return (
    <div className="image-containerC">
      <div className="image-label-container">
        <div className="image-label">Chinese</div>
        <IconButton className="arrow-button">
          <ArrowForwardIcon className="arrow-icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chinese;