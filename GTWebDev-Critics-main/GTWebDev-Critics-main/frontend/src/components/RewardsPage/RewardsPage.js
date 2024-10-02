import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Headbar from '../Headbar/Headbar';
import SideBar from '../SideBar/SideBar';
import LockIcon from '@mui/icons-material/Lock';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ee3e38',
    },
    secondary: {
      main: '#fffff',
    },
    tertiary: {
      main: '#000000',
    },
    fourth: {
      main: '#2f4858',
    }
  },
});


export default function RewardsPage() {



  return (

    <ThemeProvider theme={theme}>
      <Headbar></Headbar>
      <SideBar>c</SideBar>
      <Grid container component="main" sx={{ height: '50vh' }}>
        <CssBaseline />

        <Grid item xs={12} sm={12} md={12} elevation={6} square>


          <Typography component="h1" variant="h4" align='center' sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize: 25, fontStyle: "bold" }}>
            <br></br>

            3/5 bubbles created!
          </Typography>


        </Grid>
        <Grid item xs={6} sm={6} md={6} elevation={6} square>
          <Typography component="h1" variant="h5" align='center' sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize: 25, fontStyle: "bold" }}>
            <br></br><br></br>User, you've earned 2 rewards this month! <br></br>
            <br></br>
            Review two more restaurants to unlock your next reward.
          </Typography>
          <br></br>
          <br></br>

          <br></br>
          <br></br>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 2, paddingRight: 2, fontSize: 14, fontStyle: "bold" }}

            >
              Submit a claim
            </Button>
          </div>
        </Grid>
        <Grid item xs={6} sm={6} md={6} elevation={6} square>

          <Box
            sx={{
              width: 300,
              height: 50,
              backgroundColor: 'primary.main',
              borderRadius: 15,
              align: "center",

              '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
              },
            }}>Choose your reward</Box>




          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <LockIcon></LockIcon>
            <Button
              type="submit"
              variant="contained"
              sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 2, paddingRight: 2, fontSize: 14, fontStyle: "bold" }}

            >
              Read More
            </Button>
          </div>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}



/*
<Box mt={2} component="span" sx={{ bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300, }}>
          */