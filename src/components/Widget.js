import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

/**
 * Display a picture from a mars rover and the name of the rover
 * @returns Mars watch widget
 * @todo fetch random image from a mars rover
 */
const Widget = () => {
  return (
    <Box>
      <Typography variant="h6" color="secondary.main" paragraph sx={{ mb: 0 }}>
        Mars Watch
      </Typography>
      <hr />
      <Card sx={{ width: '100%' }}>
        <CardMedia
          component="img"
          image="https://mars.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
          alt="Mars rover picture"
        />
        <CardContent>
          <Chip label="Curiosity" variant="outlined" />
        </CardContent>
      </Card>
    </Box>
  )
}

export default Widget
