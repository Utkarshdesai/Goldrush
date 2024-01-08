import React, { useEffect , useState} from 'react'
import { Detail } from '../component/Detail'
import { Youtube } from '../component/Youtube'
import { Box } from '@mui/material'
import { useParams } from 'react-router-dom'
import { exerciseoptions, fetchexercise, youtubeoptions } from '../Utilis/Fetchdata'
import { Similarexercise } from '../component/Similarexercise'


export const Exercisedetail = () => {

  const [exercisedetail , setexercisedetail] = useState({});
  const [videodetail ,setvideodetail] =useState([]);
  const [targetmuscledata,settargetmuscledata] = useState([])
  const [equipmentdata ,setequipmentdata] =useState([])
 const {id} = useParams();


  const fetchclickexercise = async ()=> 
  {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeurl = 'https://youtube-search-and-download.p.rapidapi.com';
  
   
    const exercisedeaildata = await fetchexercise(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseoptions);
    
    setexercisedetail (exercisedeaildata)

    const exercisevideodata = await fetchexercise(`${youtubeurl}/search?query=${exercisedeaildata.name}`, youtubeoptions) 
   
    console.log(exercisevideodata.contents)
    setvideodetail(exercisevideodata.contents)

    const target =await fetchexercise (`${exerciseDbUrl}/exercises/target/${exercisedeaildata.target}`,exerciseoptions)
    settargetmuscledata(target)
    console.log(target)

    const equipment =await fetchexercise (`${exerciseDbUrl}/exercises/equipment/${exercisedeaildata.equipment}`,exerciseoptions)
    setequipmentdata(equipment)
    console.log(equipment)

  }

    useEffect ( ()=> {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    fetchclickexercise()

    } ,[id]);




  return (
    <div>
    <Box> 
    <Detail   exercisedetail = {exercisedetail}/>
    <Youtube   videodetail ={videodetail} name ={exercisedetail.name}/>
    <Similarexercise targetmuscledata = {targetmuscledata} equipmentdata={equipmentdata}/>
    </Box>
  
    


    </div>
  )
}

