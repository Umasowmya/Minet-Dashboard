import React from 'react'
import {customStyles} from '../../../theme/index'
import Typo from '../../atoms/Typo/index'
import image from '../../../assets/explore.png'
import { Grid } from '@mui/material'
import CustomGrid from '../../molecules/Bitcoin/index'

interface bitcoinProps{
        image:string;
        title:string;
        price:string;

}

const index = () => {

    const classes=customStyles();

    const bitcoin:bitcoinProps[]=[
        {
            image:'../../../assets/explore.png',
            title:"Bitcoin",
            price:"$3,406,069.54"

        },

        {

            image:'../../../assets/etherum.png',
            title:"Etherum",
            price:"$240,048.03"
        },

       /* {
            image:'../../../assets/explore.png',
            title:"Bitcoin",
            price:"$3,406,069.54"

        },

        {
            image:'../../../assets/etherum.png',
            title:"Etherum",
            price:"$240,048.03"
        },

        {
            image:'../../../assets/explore.png',
            title:"Bitcoin",
            price:"$3,406,069.54"

        },

        {

            image:'../../../assets/etherum.png',
            title:"Etherum",
            price:"$240,048.03"
        },

        {
            image:'../../../assets/explore.png',
            title:"Bitcoin",
            price:"$3,406,069.54"

        },

        {
            image:'../../../assets/etherum.png',
            title:"Etherum",
            price:"$240,048.03"
        },
*/

    
    ]

  return (
    
      <Grid container sx={{ position: "absolute", left: "128px", top: "200px" ,width:"708px"}} >

          <Grid item container direction="row" spacing={2}>


            {bitcoin.map((value, index) => {
                    return <CustomGrid image={value.image} title={value.title} price={value.price}/>
                })}
            
          </Grid>
    </Grid>

  )
}

export default index
