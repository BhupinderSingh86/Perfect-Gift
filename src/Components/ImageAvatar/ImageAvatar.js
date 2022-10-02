import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import {useState} from "react"

//when login is set up include a iternary if statement for the styled badge to show when logged on otherwise off

function ImageAvatar() {

  const [profile, setProfile] = useState(
    1
);

function handleChange(event) {
    setProfile(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files);
}


    return (
        <div>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot">
        <Avatar 
        alt="Bhupinder Singh" 
        src={{profile} ? String({profile}) : "static/images/avatar/2.jpg"}
        sx={{ 
            bgcolor: deepOrange[500],
            width: 56,
            height: 56,
            top: 200,
            left: 40,
            }}
            />   
        <input hidden accept="image/*" type="file" onChange={handleChange}/>
        <img alt= "" src={profile}/>
      </StyledBadge>
      </IconButton>
        </div>
    )
}

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      top: 235,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

export default ImageAvatar;