import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'

const Title = ({ submitYear }) => {
  const [year, setYear] = useState(2002)

  return (
    <Box
      sx={{
        pt: 8
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h1"
          align="center"
          color="secondary.main"
          sx={{ mb: 2 }}
        >
          Space.
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="secondary.main"
          paragraph
        >
          Your multiplanetary photo-sharing app.
        </Typography>
        <Slider
          aria-label="Year"
          value={year}
          valueLabelDisplay="on"
          step={1}
          marks
          min={1996}
          max={2020}
          color="secondary"
          sx={{ my: 4 }}
          onChange={(e) => {
            setYear(e.target.value)
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              submitYear(year)
            }}
          >
            Change year
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Title
