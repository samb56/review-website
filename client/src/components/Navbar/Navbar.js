import React from 'react'
import { Link } from 'react-router-dom'
import { Toolbar, Avatar, Button, AppBar, Typography } from '@mui/material'
import useStyles from './styles'
import memories from '../../images/hookah clouds.jpg'

const Navbar = () => {
  const { classes } = useStyles()

  const user = null

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant='h2' align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageURL}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}
              <Button variant="contained" className={classes.logout}>Logout</Button>
            </Typography>
          </div>
        ) : (
          <Button component={Link} to='/auth' variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>

    </AppBar>
  )
}

export default Navbar