import React from 'react'
import {useState} from "react"
import "./ProfileBackground.css"
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton';
import { Container, Typography } from '@mui/material';
import { Link } from "react-router-dom";

// //when login is set up include a iternary if statement for the styled badge to show when logged on otherwise off

// function ProfileBackground() {

//   const [profile, setProfile] = useState(
//     0
// );

// function handleChange(event) {
//     setProfile(URL.createObjectURL(event.target.files[0]));




function ProfileBackground() {

// const [profile, setProfile] = useState(0);
const [selectedImage, setSelectedImage] = useState(null);

function handleChange(event) {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));

    console.log(event.target.files);
}


    return (
        <>
        <Link to="Sign Up Form">Click to Sign Up</Link>
        <Container>
        <Typography variant="h4" component="h1" color="secondary" align="center">Click below to add your personalised background</Typography>
        </Container>
        <div id="border">
        <img alt= "" src={selectedImage}/>
        <Button id="button" variant="contained" component="label" size="small" >
        Upload
        <input hidden accept="image/*" type="file" onChange={handleChange}/>
        </Button>
        </div>
        </>
    )
}

export default ProfileBackground;