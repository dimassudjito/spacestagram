import React from 'react'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'

import Post from './Post.js'
import Widget from './Widget.js'

const Timeline = ({ images, loading }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
        <CircularProgress color="secondary" />
      </Box>
    )
  }
  return (
    <Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container>
          <Grid item xs={12} md={8}>
            {/* Display each image in images */}
            <Grid container spacing={4}>
              {images.map((image) => (
                <Grid item key={image.date}>
                  <Post image={image} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* Side widget only appears in large screen */}
          <Grid
            item
            md={4}
            sx={{ pl: 4, display: { xs: 'none', md: 'block' } }}
          >
            <Widget />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Timeline
