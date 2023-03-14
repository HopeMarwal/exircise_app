//MUI
import { Botton, Button, Stack, Typography } from "@mui/material"
//Router
import { Link } from "react-router-dom"

export default function ExerciseCard({ exerciseItem }) {

  return (
    <Link className="exercise-card" to={`/exercise/${exerciseItem.id}`}>
      {/* Gif image */}
      <img
        src={exerciseItem.gifUrl}
        alt={exerciseItem.name}
        loading='lazy'
      />
      {/* Info buttons */}
      <Stack direction='row'>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
        >
          {exerciseItem.bodyPart}
        </Button>

        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize'
          }}
        >
          {exerciseItem.target}
        </Button>
      </Stack>
        
      {/* Info name */}
      <Typography
          ml='21px'
          color='#000'
          fontWeight='bold'
          textTransform='capitalize'
          pb='10px'
          mt='11px'
          fontSize='22px'
        >
          {exerciseItem.name}
        </Typography>
    </Link>
  )
}
