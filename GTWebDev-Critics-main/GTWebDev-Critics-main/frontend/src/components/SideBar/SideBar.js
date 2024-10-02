import React from 'react';
import './SideBar.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';


function SideBar(props) {
  const isOpen = props.isOpen;

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div><a className="deals" href="_blank">Deals</a></div>
      <div><a className="rewards" href="_blank">Rewards Portal</a></div>
      <div><a className="message" href="_blank">Message Us</a></div>
      <div><a className="connect" href="_blank">CONNECT WITH US</a></div>
      <div className="grey-box">
        <div className="instagram"><InstagramIcon fontSize="large"></InstagramIcon></div>
        <div className="facebook"><FacebookIcon fontSize="large"></FacebookIcon></div>
        <div className="phone"><PhoneIcon fontSize="large"></PhoneIcon></div>
      </div>
    </div>
  );
}

export default SideBar;