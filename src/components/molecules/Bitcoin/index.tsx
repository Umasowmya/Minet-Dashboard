import React from 'react'
import { Grid } from '@mui/material'
import { customStyles } from '../../../theme'
import Typo from '../../atoms/Typo/index'

interface coinProps{
    image:string;
    title:string;
    price:string;
}

const index = ({image,title,price}:coinProps) => {

    const classes = customStyles();
  return (
    
      <Grid item direction="column" xs={3} className={classes.coinGrid}>
          <Grid item >
              <img src={image} alt="explore" width="56px" height="56px" />
          </Grid>
          <Grid item>
              <Typo variant="body1" text={title} component="div" className={classes.coinName} />
          </Grid>
          <Grid item >
              <Typo variant="body1" text={price} component="div" className={classes.coinName} />

          </Grid>
        </Grid>

      
  )
}

export default index
