import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginButton from './components/Login/LoginButton'
import LogoutButton from './components/Login/LogoutButton'

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import useStyles from './styles'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const { classes } = useStyles()
  const dispatch = useDispatch()


  useEffect(() => {
    // dispatch(getPosts)
    getPosts()(dispatch)
  }, [currentId, dispatch])
  return (
    <Container maxWidth='lg'>
      <h1>Auth0 Login</h1>
      <LoginButton />
      <LogoutButton />
      <Navbar />

      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={2}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

          </Grid>

        </Container>
      </Grow>

    </Container>
  )
}

export default App