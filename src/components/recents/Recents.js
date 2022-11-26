import { Box, Grid, } from '@mui/material'
import React from 'react'
import cardImage1 from '../../images/card1.webp'
import cardImage2 from '../../images/card2.webp'
import cardImage3 from '../../images/card3.jpg'
import cardImage4 from '../../images/card4.jpg'
import Card from '../card/Card'

const Recents = () => {
  return (
    <Box>
      <Grid container rowSpacing={1} columnSpacing={{xs:1, sm:2, md:1}}>
        <Grid item >
          <Card cardImage = {cardImage1} />
        </Grid>
        <Grid item md={6} xs={12} >
        <Card cardImage = {cardImage2} />
        </Grid>
        <Grid item md={6} xs={12} >
        <Card cardImage = {cardImage3} />
        </Grid>
        <Grid item md={6} xs={12} >
        <Card cardImage = {cardImage4} />
        </Grid>
        <Grid item md={6} xs={12} >
        <Card cardImage = {cardImage1} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Recents
