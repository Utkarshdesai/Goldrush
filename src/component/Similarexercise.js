import React from 'react'
import { Stack ,Button, Box, TextField , Typography } from '@mui/material'
import  HorizontalScrollbar from './HorizontalScrollbar'
import { Loader } from './Loader'

export const Similarexercise = ({equipmentdata ,targetmuscledata}) => {
  return (
    <div>
     <Box sx={{mt:{lg:'100px' ,xs:'0'}}}>
 
     {/* <Typography variant='h3'> Exercises that target the same muscle group </Typography> */}

      <Stack direction="row" sx={{p:'2' ,position:'relative'}}>  
{/*       
     {
      targetmuscledata.length ? <HorizontalScrollbar data ={targetmuscledata}></HorizontalScrollbar> : <Loader></Loader>
     }  */}

     {/* <Typography variant='h3'> Exercises that target the same equipment </Typography> */} 
      {/* {
       equipmentdata.length ? <HorizontalScrollbar data ={targetmuscledata}></HorizontalScrollbar> : <Loader></Loader>
      
     }  */}
      
      
      </Stack>

     </Box>

    </div>
  )
}
