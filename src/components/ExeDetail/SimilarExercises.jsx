//MUI
import {Box, Stack, Typography} from '@mui/material'
//Components
import HorizontalScrollBar from '../Search/HorizontalScrollBar'
import Loader from '../Loader'

export default function SimilarExercises({ targetData, equipmentData}) {
  
  return (
    <Box sx={{ mt: '100px', xs: '0'}}>
      {/* Heading target */}
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      {/* Exercises target */}
      <Stack
        direction='row'
        mb='100px'
        sx={{
          p: '2',
          position: 'relative'
        }}
      >
        {
          targetData.length 
          ? <HorizontalScrollBar data={targetData} />
          : <Loader />
        }
      </Stack>
      
      {/* Heading equipment */}
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      {/* Exercises equipment */}
      <Stack
        direction='row'
        sx={{
          p: '2',
          position: 'relative'
        }}
      >
        {
          equipmentData.length 
          ? <HorizontalScrollBar data={equipmentData} />
          : <Loader />
        }
      </Stack>
      
    </Box>
  )
}
