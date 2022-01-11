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
        {/* enterTouchDelay make tooltip appear on touch*/}
        <Tooltip
          title="Short for Spacestagram. Shopify summer intern challenge. Inspired by Tumblr"
          enterTouchDelay={0}
        >
          <HelpOutlineIcon />
        </Tooltip>
      </Toolbar>
    </AppBar>
  )
}

export default Header
