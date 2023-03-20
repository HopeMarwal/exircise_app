//MUI
import { Stack, Typography } from "@mui/material"
//Icon
import Icon from '../../assets/icons/gym.png'
//Context
import { useExerciseContext } from '../../context/ExerciseContext'

export default function BodyPartCard({ item }) {

  const { bodyPart, setBodyPart } = useExerciseContext()

  const handleClick = (item) => {
    setBodyPart(item)
    window.scrollTo({
      top: 1800,
      left: 100,
      behavior: 'smooth'
    })
  }
  return (
    <Stack
      type='button'
      alignItems='center' 
      justifyContent='center'
      className="bodyPart-card"
      onClick={() => handleClick(item)}
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : 'none',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px',
      }}
    >
      <img
        src={Icon}
        alt='dumbbell'
        style={{ width: '40px', height: '40px'}}
      />
      <Typography
        fontSize='24px'
        fontWeight='bold'
        color='#3a1212'
        textTransform='capitalize'
      >
        {item}
      </Typography>
    </Stack>
  )
}
