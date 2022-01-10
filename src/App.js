import React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import CameraIcon from '@mui/icons-material/PhotoCamera'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2b38'
    },
    secondary: {
      main: '#ffffff'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
        </Toolbar>
      </AppBar>

      <main>
        <Box
          sx={{
            bgcolor: 'primary.main',
            pt: 8
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h1"
              align="center"
              color="secondary.main"
              gutterBottom
            >
              Spacestagram
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="secondary.main"
              paragraph
            >
              Your multiplanetary photo-sharing app
            </Typography>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
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
                    sx={{
                      // 16:9
                      pt: '56.25%'
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
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
        </Container>
      </main>
    </ThemeProvider>
  )
}

export default App
