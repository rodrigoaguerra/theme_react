import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './views/Commun/Header';
import Footer from './views/Commun/Footer';
import Routers from './Routers';

const sections = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Users', url: '/users' },
  { title: 'Single', url: '/single' },
  { title: 'Checkout', url: '/checkout' },
  { title: 'Sing In', url: '/sign-in' },
  { title: 'Sign Up', url: '/sign-up' },
  { title: 'Dashboard', url: '/dashboard' },
];

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <CssBaseline />
      {/* <Header title="Blog" sections={sections} /> */}
      <Container maxWidth="lg">
        <Routers />
      </Container>
        <Footer
          title="Footer"
          description="Something here to give the footer a purpose!"
        /> 
    </ThemeProvider>
  );
}

export default App;
