import { Grid } from '@mui/material'
import React from 'react'
import { customStyles } from '../../../theme'
import Typo from '../../atoms/Typo/index'
import Buttons from '../../atoms/Buttons/Buttons'
import {KeyboardArrowUp ,KeyboardArrowDown }from '@mui/icons-material'


const index = () => {
    const classes = customStyles();
  return (
   <Grid container direction="row" spacing={5} className={classes.footer} sx={{display:"flex",
                                                                            flexDirection:"row",
                                                                            alignItems:"center"}}>

            <Grid item>
                <Typo variant="body2" className={classes.footerElement} component="div" text="DashBoard"/>

            </Grid>

            <Grid item>

                <Typo variant="body2" className={classes.footerElement} component="div" text="Careers"/>

            </Grid>

            <Grid item>

                <Typo variant="body2" className={classes.footerElement} width="150px" component="div" text="Legacy and Privacy"/>

            </Grid>

            <Grid item>

                <Typo variant="body2" width="120px" className={classes.footerElement2} component="div" text="© 2021 Minet"/>

            </Grid>

    

            <Grid item>
                <Buttons variant="outlined" endIcon={<KeyboardArrowDown/>} sx={{
                                                                        position:"absolute",
                                                                        left:"77%"

                                                                        }}
                children="English"/>
            </Grid>

            <Grid item>
                <Buttons variant="outlined" sx={{
                                                    position:"absolute",
                                                    left:"85%"
                                                }}
                children="Need Help"/>
            </Grid>

       
       
   </Grid>
  )
}

export default index
