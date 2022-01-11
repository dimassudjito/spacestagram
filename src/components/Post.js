import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Post = ({ image }) => {
  const [like, setLike] = useState(false)

  const likeImage = () => {
    setLike(!like)
  }

  return (
    <Card
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardMedia
        component="img"
        image={image.media_type === 'image' ? image.url : image.thumbnail_url}
        alt="Awesome space picture"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {image.title}
        </Typography>
        <Typography>{image.explanation.substring(0, 200)}</Typography>
      </CardContent>
      <Grid container>
        <Grid item xs={10}>
          <Typography sx={{ color: 'text.secondary', p: 2 }}>
            {image.date}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              p: 1
            }}
          >
            <IconButton aria-label="like" onClick={likeImage}>
              {like ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Post
