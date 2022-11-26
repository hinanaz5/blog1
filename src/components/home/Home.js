
import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Recents from '../recents/Recents'
import Hero from '../hero/Hero'
import Categories from '../category/Categories'
import RightBar from '../rightbar/RightBar'
const Home = () => {
  return (
    <Box>
        <Hero />
        <Container>
        <Categories/>
        <hr/>
        <Stack   direction={{ xs: "column", md: "row" }}>
            <Box flex={3} sx={{padding: "18px 100px 100px 100px"}}>
                <Recents/>
            </Box>

            <Box flex={1}>
                <RightBar />
            </Box>
            
        
        </Stack>

        </Container>
      
    </Box>
  )
}

export default Home
