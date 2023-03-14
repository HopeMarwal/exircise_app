//MUI
import { Box } from '@mui/material';
//Components
import BodyPartCard from './BodyPartCard';
//React
import { useRef, useEffect } from 'react';

export default function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {
  const scrollMenu = useRef()

  useEffect(() => {
    scrollMenu.current.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollMenu.current.scrollLeft += evt.deltaY*5;

    return () => {
      scrollMenu.current.removeEventListener("wheel")
    }
  });
  }, [])
  return (
    <div className='horizontal-scroll-menu' ref={scrollMenu} > 
      {
        data.map((item) => (
          <Box
            key={item.id || item }
            itemID={item.id || item }
            title={item.id || item }
            m='0 40px'
          >
            <BodyPartCard 
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))
      }
    </div>
  )
}
