import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'

const cards = [1, 2, 3]
const api =
  'https://api.nasa.gov/planetary/apod?api_key=BvdIgll7q8tLys8FshqwrTCLGrbbprucd6DjtqwX&start_date=2013-07-01&end_date=2013-07-03&thumbs=True'

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
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to
                        describe the content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
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
