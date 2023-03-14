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
  //Props
  const  {exercises, bodyPart, setExercises} = props;
  //State
  const [currentPage, setCurrentPage] = useState(1)
  //Component variables
  const exercisesPerPage = 9
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const handleChangePage = (e, value) => {
    console.log(currentPage)
    setCurrentPage(value)
    window.scrollTo({
      top: 1800,
      behavior: 'smooth'
    })
  }

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
          currentExercises.map((exerciseItem, index) => (
            <ExerciseCard exerciseItem={exerciseItem} key={index} />
          ))
        }
      </Stack>

      {/* Pagination */}
      <Stack mt='100px' alignItems='center'>
        {
          exercises.length > 9 && (
            <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={handleChangePage}
              size='large'
            />
          )
        }
      </Stack>
    </Box>
  )
}
