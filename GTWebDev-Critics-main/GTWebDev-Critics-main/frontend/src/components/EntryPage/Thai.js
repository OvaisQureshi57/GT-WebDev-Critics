import React from 'react';
import './Food.css';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Thai() {
  return (
    <div className="image-containerT">
      <div className="image-label-containerT">
        <div className="image-label">Thai</div>
        <IconButton className="arrow-button">
          <ArrowForwardIcon className="arrow-icon" />
        </IconButton>
      </div>
    </div>
  );
}

export default Thai;