import React, { useState } from 'react';
import { Box } from '@mui/material'
//Components
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';

export default function Home() {
  const [first, setFirst] = useState(null)
  return (
    <Box>
      <HeroBanner /> 
      <SearchExercises />
      <Exercises />
    </Box>
  )
}
