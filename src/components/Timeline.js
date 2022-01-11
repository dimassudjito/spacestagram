import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'

import Post from './Post.js'

const api =
  'https://api.nasa.gov/planetary/apod?api_key=BvdIgll7q8tLys8FshqwrTCLGrbbprucd6DjtqwX&start_date=2013-07-01&end_date=2013-07-12&thumbs=True'

const Timeline = () => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    try {
      const { data } = await axios.get(api)
      console.log(data)
      setImages(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        mt: -4
      }}
    >
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {images.map((image) => (
                <Grid item key={image.date}>
                  <Post image={image} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          {/* Side widget, only appears in large screen */}
          <Grid
            item
            md={4}
            sx={{ pl: 4, display: { xs: 'none', md: 'block' } }}
          >
            <Card sx={{ height: '15em', width: '100%' }}>some widget here</Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Timeline
