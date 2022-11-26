import React from 'react'
import {Box, Stack, styled, Typography} from '@mui/material'
import KidsImage from '../../images/kidsimage.jpg'
import MenImage from '../../images/menimage.webp'
import WomenImage from '../../images/womenimage.jpg'

const StyledBox = styled(Box)({
  height: 200,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
});

const StyledTypography = styled(Typography) ({
  margin: '25% 50px 25% 50px',
  background: "white",
  opacity: 0.8
})

const Categories = () => {
  return (
    <Box>
      <Stack direction={{sx: 'column', sm: 'row'}} spacing={{sx:1 , sm: 2, md: 4}} mt={5}>
        <StyledBox sx={{backgroundImage:`url(${KidsImage})`}}><StyledTypography align="center" variant="h3" >
          Kids
        </StyledTypography></StyledBox>
        <StyledBox sx={{backgroundImage:`url(${MenImage})`}}><StyledTypography align="center" variant="h3" >
          Men
        </StyledTypography></StyledBox>
        <StyledBox sx={{backgroundImage:`url(${WomenImage})`}}><StyledTypography align="center" variant="h3" >
          Women
        </StyledTypography></StyledBox>
      </Stack>
    </Box>
  )
}

export default Categories
