import React from 'react'
import { Typography,Box ,Stack } from '@mui/material'

export const Youtube = ({videodetail, name}) => {
  return (
    <div>
        <Box sx={{marginTop: {lg:'200px' ,xs:'20px'}}} p="20px" >
         <Typography>
            Watch <span style={{color:'#ff2625 ',textTransform:'capitalize'}}> {name} </span> exercise videos
          </Typography>
        
        <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
       

        {videodetail
        ?.slice(0, 5)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="20px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}

        </Stack>
        </Box>



    </div>
  )
}
