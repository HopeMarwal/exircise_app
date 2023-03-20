import { createContext, useContext, useState, useEffect } from 'react';
//Fetch
import { fetchData, exerciseOptions } from '../utils/fetchData';

const Context = createContext();

export const ExerciseContext = ({ children }) => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    const fetchDataExerciseData = async () => {
      let exercisesData = []
      if( bodyPart === 'all') {
        exercisesData = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
      setExercises(exercisesData)
    }
    fetchDataExerciseData()

  }, [bodyPart])

  const handleSearch = async (searchTerm) => {
    console.log(searchTerm)
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
    //Setting filtered exercises to state
    setExercises(searchExercises)
  }


  return (
    <Context.Provider
      value={{
        exercises,
        bodyPart,
        setBodyPart,
        setExercises,
        handleSearch
      }}
    >
      {children}
      
    </Context.Provider>
  )
}

export const useExerciseContext = () => useContext(Context)