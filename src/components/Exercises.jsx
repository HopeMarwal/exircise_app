//React
import { useState, useEffect } from 'react';
//MUI
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
//API
import { exerciseOptions, fetchData } from  '../utils/fetchData';
//Components
import ExerciseCard from './Exercise/ExerciseCard';

export default function Exercises(props) {
  const  {exercises, bodyPart, setExercises} = props;

  return (
    <Box 
      id='exercises'
      sx={{ mt: { lg: '110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>

      {/* Map exercises data */}
      <Stack
        direction='row'
        sx={{ gap: { lg: '110px', xs: '50px'}}}
        flexWrap='wrap'
        justifyContent='center'
      >
        {
          exercises.map((exerciseItem, index) => (
            <ExerciseCard exerciseItem={exerciseItem} key={index} />
          ))
        }
      </Stack>
    </Box>
  )
}
