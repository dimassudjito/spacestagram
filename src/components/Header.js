import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import CameraIcon from '@mui/icons-material/PhotoCamera'

const Header = () => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <CameraIcon sx={{ mr: 2 }} />
      </Toolbar>
    </AppBar>
  )
}

export default Header
