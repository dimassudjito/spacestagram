import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <RocketLaunchIcon sx={{ mr: 2 }} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
