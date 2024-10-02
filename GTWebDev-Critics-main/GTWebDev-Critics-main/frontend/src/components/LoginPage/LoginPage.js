import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Headbar from '../Headbar/Headbar';
import BackgroundImage from "../../images/Critics.png";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://critics.gatech.edu/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
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


export default function LoginPage() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (

    <ThemeProvider theme={theme}>
      <Headbar></Headbar>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={6} sm={6} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 1,
              mx: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 0.7, bgcolor: 'primary.main' }}>
            </Avatar>
            <Typography component="h1" variant="h5" align='center' sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize: 20, fontStyle: "bold" }}>
              Welcome back <br></br>
              Please enter your details.
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 0, paddingRight: 0, fontSize: 14, fontStyle: "bold" }}

              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 0, paddingRight: 0, fontSize: 14, fontStyle: "bold" }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 0, paddingRight: 7, fontSize: 14, fontStyle: "bold" }}
                label="Remember me for 30 days"
              />
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize: 14, fontStyle: "bold" }}

              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1, flexgrow: 1, fontFamily: "DM Sans", paddingLeft: 7, paddingRight: 7, fontSize: 14, fontStyle: "bold" }}
              >
                Sign In with Google
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>

                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          sx={{

            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${BackgroundImage})`,
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'lighten',
          }}>
          
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}