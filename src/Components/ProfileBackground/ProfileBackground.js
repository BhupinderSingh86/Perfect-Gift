import React from 'react'
import {useState} from "react"
import "./ProfileBackground.css"
import Button from '@mui/material/Button'


function ProfileBackground() {

// const [profile, setProfile] = useState(0);
const [selectedImage, setSelectedImage] = useState(null);

function handleChange(event) {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files);
}


    return (
        <div id="border">
        <img alt= "" src={selectedImage}/>
        <Button id="button" variant="contained" component="label" size="small" >
        Upload
        <input hidden accept="image/*" type="file" onChange={handleChange}/>
        </Button>
        </div>
    )
}

export default ProfileBackground;