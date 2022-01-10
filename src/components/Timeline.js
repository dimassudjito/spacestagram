import React from 'react'

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

const Timeline = () => {
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
              {cards.map((card) => (
                <Grid item key={card}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <CardMedia
                      component="img"
                      image="https://source.unsplash.com/random"
                      alt="random"
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
