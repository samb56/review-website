import React from 'react';
import { Container, AppBar, Typography, Grow, Grid, Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import Posts from './components/Posts/Posts';

import Form from './components/Form/Form';
import memories from './images/hookah clouds.jpg';
import theme from './theme';
import useStyles, { StyledAppBar, sxStyles } from './styles';

const App = () => {
  const { classes } = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {
          // Old useStyles/makeStyles API
        }
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img className={classes.image} src={memories} alt="memories" height="60" />
        </AppBar>

        {
          // Styled API
        }
        <StyledAppBar />

        {
          // sx props
        }
        <AppBar position="static" color="inherit" sx={sxStyles.appBar}>
          <Typography variant="h2" align="center" sx={sxStyles.header}>
            Memories
          </Typography>
          <Box component="img" src={memories} alt="memories" sx={sxStyles.image} />
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={2}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
