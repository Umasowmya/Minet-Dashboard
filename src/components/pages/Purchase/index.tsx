import React from 'react'
import Template from '../../templates/index'
import HorizontalHeader from '../../organisms/HeaderH/index'
import VerticalHeader from '../../organisms/HeaderV/index'
import { Grid } from '@mui/material'
import Typo from '../../atoms/Typo/index'
import { customStyles } from '../../../theme'

const index = () => {

    const classes=customStyles();
  return (
    <Template HorizontalHeader={<HorizontalHeader/>} VerticalHeader={<VerticalHeader/>}
    
    Content={
        <>
            <Grid item container >
                
                <Grid item container>
                    
                     <Grid item sx={{ position: "absolute", left: "106px", top: "104px" }}>
                        <Typo variant="subtitle1" text="Buy Crypto" component="div" className={classes.buyNowButton} />
                    </Grid>
                    
                    <Grid>

                        <Grid item sx={{ position: "absolute", left: "128px", top: "155px" }}>
                            <Typo variant="body1" text="Choose one" component="div" className={classes.choose} />

                        </Grid>

                        <Grid container sx={{ position: "absolute", left: "128px", top: "200px" }} >

                            <Grid item container direction="row">

                                <Grid item direction="column" className={classes.coinGrid}>
                                    <Grid item >
                                        <img src="" alt="explore" width="56px" height="56px" />
                                    </Grid>
                                    <Grid item>
                                        <Typo variant="body1" text="Bitcoin" component="div" className={classes.coinName} />
                                    </Grid>
                                    <Grid item >
                                        <Typo variant="body1" text="$3,406,069.54" component="div" className={classes.coinName} />

                                    </Grid>

                                </Grid>


                            </Grid>



                        </Grid>

                        <Grid container sx={{ position: "absolute", left: "128px", top: "370px" }} >

                            <Grid item ></Grid>



                        </Grid>


                    </Grid>
                </Grid>
            </Grid>

        </>

   
    }/>
  )
}

export default index
