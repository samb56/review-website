import React from 'react'
import { Container, AppBar, Typography, Grow, Grid, Button, Toolbar, Box } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import hookahPic from './images/hookahtable.jpg'

const theme = createTheme({ palette: { mode: 'dark' } })

const App = () => {


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Hookah Reviews</Typography>
            <img src={hookahPic} alt="Hookah Review" height="60"></img>
          </Toolbar>
        </AppBar>
      </Box>
      <Container maxWidth="lg">
        <Grow in>
          <Container>
            <Grid container justiy="space-between" alignItems="stretch" spacing={3}>
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
  )
}

export default App
