import * as React from 'react';
import './Headbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeProvider, createTheme} from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    secondary: {
      main: "#EE3E38",
      contrastText: "#FFFFFF "
    }
  }
});

function Headbar(props) {
  
  const handleMenuClick = () => {
    props.setMenuOpen(!props.menuOpen);
  }

  return (
    <ThemeProvider theme={customTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"secondary"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Button sx={{flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize:20, fontStyle: "bold"}} variant="h6">Write a Review</Button>
          <Button sx={{flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize:20, fontStyle: "bold"}} variant="h6">Home</Button>
          <Button sx={{flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize:20, fontStyle: "bold"}} variant="h6">About</Button>
          <Button sx={{flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize:20, fontStyle: "bold"}} variant="h6">Contact</Button>
          <Button sx={{flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize:20, fontStyle: "bold"}} variant="h6">Services</Button>
          <Button sx={{flexgrow: 1, fontFamily: "DM Sans", backgroundColor: "black"}} variant="contained">Log In</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}

export default Headbar;