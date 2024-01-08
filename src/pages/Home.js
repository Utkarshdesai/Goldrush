import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Herobanner } from '../component/Herobanner'
import  Searchworkout  from '../component/Searchworkout'
import { Exercises } from '../component/Exercises' 

export const Home = () => {
  const [exercise ,setexercise] = useState([])
  const[bodyPart ,setbodyPart] =useState('all')
  
  return (
    <div>
      <Box>
       <Herobanner></Herobanner>
       <Searchworkout 
       bodyPart={bodyPart} setbodyPart={setbodyPart}
        setexercise = {setexercise} exercise={exercise}
       ></Searchworkout>
       <Exercises exercise ={exercise} setexercise ={setexercise}  bodyPart={bodyPart} setbodyPart={setbodyPart} ></Exercises>

      </Box>
        
    </div>
  )
}
