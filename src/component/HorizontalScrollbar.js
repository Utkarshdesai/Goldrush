import { Box, Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import React, { useContext } from 'react';
import { Bodypart } from './Bodypart';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ randomexercise, bodyPart, setbodyPart, isbodypart }) => (
    <ScrollMenu
      // LeftArrow={LeftArrow}
      // RightArrow={RightArrow}
      // data={randomexercise.map((item) => (
      //   <div key={item.id || item} style={{ margin: '0 40px' }}>
      //     <Bodypart
      //       item={item}
      //       randomexercise={randomexercise}
      //       bodyPart={bodyPart}
      //       setbodyPart={setbodyPart}
      //       isbodypart={isbodypart}
          />
        
    
    
 )
  
export default HorizontalScrollbar; 