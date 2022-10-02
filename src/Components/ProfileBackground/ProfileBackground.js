import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import {useState} from "react"

//when login is set up include a iternary if statement for the styled badge to show when logged on otherwise off

function ProfileBackground() {

  const [profile, setProfile] = useState(
    0
);

function handleChange(event) {
    setProfile(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files);
}


    return (
        <div>
        <IconButton color="primary" aria-label="upload picture" component="label">
        <Avatar 
        alt="BG" 
        src="/Job photo1.jpg"
        sx={{ 
            bgcolor: deepPurple[500],
            width: 56,
            height: 56,
            top: 200,
            left: 40,
            }}
            />   
        <input hidden accept="image/*" type="file" onChange={handleChange}/>
      </IconButton>
        </div>
    )
}

export default ProfileBackground;