import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const Title = () => {
  return (
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
          Space.
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
  )
}

export default Title
