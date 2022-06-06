import React from 'react'
import { Grid } from '@mui/material'
import { customStyles } from '../../theme'

interface Props{
    VerticalHeader:React.ReactNode;
    HorizontalHeader:React.ReactNode;
    Content:React.ReactNode;
}

const index = ({VerticalHeader,HorizontalHeader,Content}:Props) => {

    const classes=customStyles();
  return (

        <Grid container direction="column" >

           {VerticalHeader}
           {HorizontalHeader}
           {Content}

           
        

            
        </Grid>
  )
}

export default index
