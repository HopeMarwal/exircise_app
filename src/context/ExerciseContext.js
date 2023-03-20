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

  return (
    <Context.Provider
      value={{
        exercises,
        bodyPart,
        setBodyPart,
        setExercises
      }}
    >
      {children}
      
    </Context.Provider>
  )
}

export const useExerciseContext = () => useContext(Context)