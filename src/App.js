import React from 'react'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Header from './components/Header'
import Title from './components/Title'
import Timeline from './components/Timeline'

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
      <Header />
      <main>
        <Title />
        <Timeline />
      </main>
    </ThemeProvider>
  )
}

export default App
