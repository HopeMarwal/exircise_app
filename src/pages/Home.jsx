import { useState } from 'react';
//MUI
import { Box } from '@mui/material'
//Components
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/Search/SearchExercises';

export default function Home() {

  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HeroBanner /> 
      <SearchExercises setExercises={setExercises} />
      <Exercises setExercises={setExercises} exercises={exercises} />
    </Box>
  )
}
