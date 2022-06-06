import { Box, Grid } from '@mui/material'
import React from 'react'
import Buttons from '../../atoms/Buttons/Buttons'
import Ava from '../../atoms/Avatar/index'
import Typo from '../../atoms/Typo/index'
import {KeyboardArrowUp ,KeyboardArrowDown }from '@mui/icons-material'

import img from '../../../assets/avatar.png'

import {customStyles} from '../../../theme/index'


const index = () => {
    const classes = customStyles();

     // eslint-disable-next-line react-hooks/rules-of-hooks
     const [clicked, handler] = React.useState(false);


  return (
    
    <Grid item container>
            <Grid item sx={{position:"absolute",left:"100px"}} >
                <Typo text="Checkout"  component="div" className={classes.checkout}/>
            </Grid>

             <Grid item sx={{position:"absolute",left:"945px"}} >
                <Buttons variant="contained" className={classes.sellButton} > SELL </Buttons>
            </Grid>

            <Grid item sx={{position:"absolute",left:"1100px"}} >
                <Buttons  variant="contained" className={classes.sellButton} > BUY </Buttons>
            </Grid>

            <Grid item sx={{position:"absolute",left:"1260px"}} >
                <Ava image={img}/>
            </Grid>

            <Grid item sx={{position:"absolute",left:"1300px"}} >
                 <Buttons   endIcon={clicked ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        children=""/>
            </Grid>
    </Grid>

  )
}

export default index
