import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import Header from './components/Header'
import Title from './components/Title'
import Timeline from './components/Timeline'

const url =
  'https://api.nasa.gov/planetary/apod?api_key=BvdIgll7q8tLys8FshqwrTCLGrbbprucd6DjtqwX&start_date=2013-01-01&end_date=2013-1-31&thumbs=True'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1f2b38'
    },
    secondary: {
      main: '#ffffff'
    },
    background: {
      default: '#1f2b38'
    }
  }
})

const App = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [year, setYear] = useState(2002)

  const getImages = async () => {
    try {
      const api = `https://api.nasa.gov/planetary/apod?api_key=BvdIgll7q8tLys8FshqwrTCLGrbbprucd6DjtqwX&start_date=${year}-01-01&end_date=${year}-1-31&thumbs=True`
      const { data } = await axios.get(api)
      console.log(data)
      setImages(data)
      setLoading(false)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getImages()
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Title />
        <Timeline images={images} loading={loading} />
      </main>
    </ThemeProvider>
  )
}

export default App
