import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <RocketLaunchIcon sx={{ mr: 2 }} />
        <Box sx={{ flexGrow: 1 }} />
        <Tooltip title="Shopify fall intern challenge, inspired by Tumblr">
          <HelpOutlineIcon />
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

export default Header
