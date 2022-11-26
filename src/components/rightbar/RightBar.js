import { Avatar, Box, CardContent, CardMedia, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import postImage1 from '../../images/avatar1.png'
import postImage2 from '../../images/avatar2.jpg'
import postImage3 from '../../images/avatar3.png'
import postImage4 from '../../images/avatar1.png'
import Card from '../card/Card'
const RightBar = () => {
  return (
    <Box >
        <Typography align='center' bgcolor={"black"} color={"white"}>
            Most Popular
        </Typography>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{height:60, width:60}} alt="Remy Sharp" src={postImage1} />
      </ListItemAvatar>
      <ListItemText
        
        secondary=
          
            {" — I'll be in your neighborhood doing errands this…"}
          
        
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{height:60, width:60}} alt="Remy Sharp" src={postImage3} />
      </ListItemAvatar>
      <ListItemText
        
        secondary=
          
            {" — I'll be in your neighborhood doing errands this…"}
          
        
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{height:60, width:60}} alt="Remy Sharp" src={postImage2} />
      </ListItemAvatar>
      <ListItemText
        
        secondary=
          
            {" — I'll be in your neighborhood doing errands this…"}
          
        
      />
    </ListItem>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar sx={{height:60, width:60}} alt="Remy Sharp" src={postImage4} />
      </ListItemAvatar>
      <ListItemText
        
        secondary=
          
            {" — I'll be in your neighborhood doing errands this…"}
          
        
      />
    </ListItem>
    
    
    <Divider variant="inset" component={"li"} />
  </List>
    
    <Typography align='center' bgcolor={"black"} color={"white"}>
           About Us
    </Typography>
    <Card cardImage={postImage3} />
    
        
  </Box>
  )
}

export default RightBar

