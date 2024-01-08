import React, { useEffect, useState } from 'react'
import { Stack ,Button, Box, TextField , Typography } from '@mui/material'
import { exerciseoptions, fetchexercise } from '../Utilis/Fetchdata'
import  HorizontalScrollbar from './HorizontalScrollbar'

const Searchworkout = ({bodyPart, setbodyPart , setexercise, exercise}) => {

  const [search , setsearch ] = useState('') 
  const [randomexercise ,setrandomexercise] = useState([])
 
  const exerciseonload = async ()=> {
     const bodyPartdata = await fetchexercise ('https://exercisedb.p.rapidapi.com/exercises/bodyPartList' ,exerciseoptions)
     setrandomexercise (['all' , ...bodyPartdata])
     
     }

    useEffect( ()=> {
        exerciseonload()
    },[])


  const handlesearch = async () => {
    if (search) 
    {
      
      const searchexercised = await fetchexercise ('https://exercisedb.p.rapidapi.com/exercises', exerciseoptions)
      
      const showexercise = searchexercised.filter (
        (item) => item.name.toLowerCase().includes(search) 
        ||  item.target.toLowerCase().includes(search)  
        || item.equipment.toLowerCase().includes(search)  
        || item.bodyPart.toLowerCase().includes(search) 
       
     );
       

     window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
     
     setsearch(''); 
     setexercise(showexercise);
      

     }
     else{
      alert("enter exercise")
     }
      
   
  }


  return (
   
        <Stack alignItems="center" mt="37px" justifyContent="center" p="20px" >
          <Typography fontWeight={700} sx={{fontSize: {lg:'44px' ,xs :"30px"}}} mb="50px" textAlign="center" > Awesome Exercise you <br/> Should know  </Typography>
          <Box position="relative" mb="72px">
            <TextField 
            sx={{
              input : {
                fontWeight:"700",
                border:'none',
                borderRadius:'4px'
              },
              width: {lg :'1000px' ,xs:'350px'},
              backgroundColor:'#fff',
              borderRadius:"40px"


              }}
              height="76px"
              value= {search}
              onChange={(event)=> {setsearch(event.target.value.toLowerCase())}}
              placeholder='Search exercise'
              type='text'
            
            > </TextField>
             <Button  className='search-btn'
             sx={{
                bgcolor :"#FF2625",
                color:'#fff',
                textTransform:"none",
                width: {lg:'175px' ,xs :'80px'},
                fontsize: {lg : '20px' ,sx:'14px'},
                height:'56px',
                position:"absolute",
                right:'0',
             }}
             onClick={handlesearch}
            >Search</Button>
          </Box> 
         <Box sx ={{position:'relative' ,width:'100%',p:'20px',}}>
      
            <HorizontalScrollbar bodyPart = {bodyPart}  setbodyPart={setbodyPart}
              randomexercise={randomexercise} 
            ></HorizontalScrollbar>

         </Box>
        </Stack>
    
  )
}

export default Searchworkout