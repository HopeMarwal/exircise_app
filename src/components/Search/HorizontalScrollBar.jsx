
//MUI
import { Box } from '@mui/material';
//Components
import BodyPartCard from './BodyPartCard';

export default function HorizontalScrollBar({ data, bodyPart, setBodyPart }) {

  return (
    <div>
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
