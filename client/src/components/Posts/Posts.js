import React from 'react'
import { Grid, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux'

import Post from './Post/Post'

const Posts = () => {
  const posts = useSelector((state) => state.posts)

  console.log(posts)

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid>

        
      </Grid>
    )

  )
}

export default Posts