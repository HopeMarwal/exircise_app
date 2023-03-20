import { useState, useEffect } from 'react';
//API
import { fetchData, exerciseOptions } from '../../utils/fetchData';
//MUI
import  { Box, Stack, Typography, Button, TextField } from '@mui/material';
//Components
import HorizontalScrollBar from './HorizontalScrollBar';
//Context
import { useExerciseContext } from '../../context/ExerciseContext'


export default function SearchExercises() {
  //Context
  const { setExercises } = useExerciseContext()
  //State
  const [searchTerm, setSearchTerm] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    //Fetching bodyParts data
    const fetchExerciseBodyPartsData = async () => {
      const bodyPartsData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData])
    } 
    fetchExerciseBodyPartsData()
  }, [])

  const handleSearch = async () => {
    if(searchTerm) {
      //Fetching data
      const exerciseData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      //Filtering data from api
      const searchExercises = exerciseData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(searchTerm)
          || exercise.bodyPart.toLowerCase().includes(searchTerm)
          || exercise.equipment.toLowerCase().includes(searchTerm)
          || exercise.target.toLowerCase().includes(searchTerm)
        )
      })

      //Clearing searchTerm
      setSearchTerm('')

      //Setting filtered exercises to state
      setExercises(searchExercises)
    }
  }

  return (
    <Stack
      alignItems='center'
      mt='37px'
      p='20px'
      justifyContent='center'
    >
      <Typography
        fontWeight={700}
        mb='50px'
        textAlign='center'
        sx={{ 
          textTransform: 'capitalize',
          fontSize: { lg: '44px', xs: '30px'}
        }}
      >
        awesome exercises you <br /> should know
      </Typography>
      
      {/* Search box */}
      <Box
        position='relative'
        mb='72px'
      >
        <TextField
          sx={{
            input: {
              fontWeight: 700,
              border: 'none',
              borderRadius: '4px',
            },
            width: { lg: '800px', xs: '350px'},
            backgroundColor: 'fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value.toLowerCase())}}
          placeholder='Search Exercises'
          type='text'
        />

        <Button
          className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px'},
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* BodyParts categories box */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          p: '20px',
        }}
      >
        <HorizontalScrollBar
          isBodyParts
          data={bodyParts}
        />
      </Box>
    </Stack>
  )
}
