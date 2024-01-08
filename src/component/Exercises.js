import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { Exercisecard } from './Exercisecard';
import { useState } from 'react';
import { exerciseoptions, fetchexercise } from '../Utilis/Fetchdata';


export const Exercises = ({ exercise , bodyPart ,setexercise}) => {
  
  const [currentpage ,setcurrentpage] = useState(1)
  const [exerciseperpage] = useState(3) ;



  const changepage = (e ,value) => {
      setcurrentpage(value)

      window.scrollTo ({top:1000 ,behavior:"smooth"})
  }

  

   const fetchexercisedata = async ()=> 

   {  
       let exercisedata = []
       if (bodyPart === 'all')
       {
          
        exercisedata = await fetchexercise ('https://exercisedb.p.rapidapi.com/exercises',exerciseoptions)
        console.log(bodyPart)
      
        
       }
       else 
       {
         exercisedata =  await fetchexercise (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseoptions)
         console.log(exercisedata)
         
       }

       setexercise(exercisedata)

      }
 
        useEffect( ()=> {
            fetchexercisedata() 
        },[bodyPart]) 


      //pagination
      const indexOflastexercise = currentpage*exerciseperpage;

      const indexOffirstpage = indexOflastexercise - exerciseperpage ;
      
      const currentexercise = exercise.slice(indexOffirstpage, indexOflastexercise);
      console.log(currentexercise)


  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px" >
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px" > Showing result</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center"> 
      {currentexercise.map((exercise, index) => (
        
          <Exercisecard exercise ={exercise} />
      
      ))}

      </Stack>

      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">

      {exercise.length > 1 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length/exerciseperpage)}
            page={currentpage}
            onChange={changepage}
            size="large"
            

          />
        )}
       </Stack>
    
    </Box>
  );
};

   

 


