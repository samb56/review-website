import React from 'react'
import { Link } from 'react-router-dom'
import { Toolbar, Avatar, Button, AppBar, Typography } from '@mui/material'
import useStyles from './styles'
import memories from '../../images/hookah clouds.jpg'

const Navbar = () => {
  const { classes } = useStyles()

  

  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
        //  component={Link} to="/" 
         className={classes.heading} variant='h2' align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </div>
      

    </AppBar>
  )
}

export default Navbar