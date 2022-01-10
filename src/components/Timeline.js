import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'

const api =
  'https://api.nasa.gov/planetary/apod?api_key=BvdIgll7q8tLys8FshqwrTCLGrbbprucd6DjtqwX&start_date=2013-07-01&end_date=2013-07-12&thumbs=True'

const Timeline = () => {
  const [images, setImages] = useState([])

  const getImages = async () => {
    try {
      const res = await axios.get(api)
      console.log(res.data)
      setImages(res.data)
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
                  <Card
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={
                        image.media_type === 'image'
                          ? image.url
                          : image.thumbnail_url
                      }
                      alt="Awesome space picture"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {image.title}
                      </Typography>
                      <Typography>
                        {image.explanation.substring(0, 200)}
                      </Typography>
                    </CardContent>
                    <Grid container>
                      <Grid item xs={11}>
                        <Typography sx={{ color: 'text.secondary', p: 2 }}>
                          {image.date}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <CardActions>
                          <IconButton aria-label="like">
                            <FavoriteIcon />
                          </IconButton>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Card>
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
