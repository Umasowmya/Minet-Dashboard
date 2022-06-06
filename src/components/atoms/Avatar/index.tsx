import React from 'react'
import { Avatar } from '@mui/material';


interface letter{
  image:string
}

const index = ({image}:letter) => {
  return (
    <Avatar  src={image} alt="user" sx={{width:'40px', height:'40px'}}/>
        
  )
}

export default index