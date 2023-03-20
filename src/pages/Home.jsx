//MUI
import { Box } from '@mui/material'
//Components
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/Search/SearchExercises';

export default function Home() {

  return (
    <Box>
      <HeroBanner /> 
      <SearchExercises />
      <Exercises />
    </Box>
  )
}
