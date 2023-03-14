//MUI
import { Typography, Stack, Button } from "@mui/material"
//Icons
import BodyPartImage from '../../assets/icons/body-part.png';
import TargetImage from '../../assets/icons/target.png';
import EquipmentImage from '../../assets/icons/equipment.png';


export default function Detail({ exerciseData}) {
  const { bodyPart, gifUrl, equipment, name, target } = exerciseData;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    }
  ]

  return (
    <Stack
      gap='60px'
      sx={{
        flexDirection: { md: 'row'},
        p: '20px',
        alignItems: 'center'
      }}
    >
      {/* Gif image */}
      <img 
        src={gifUrl}
        alt={name}
        loading='lazy'
        className="detail-image"
      />

      {/* Info detail exercise */}
      <Stack sx={{ gap: { lg: '35px', sm: '20px'}}}>

        <Typography variant='h3'>
          {name}
        </Typography>

        <Typography variant="h6">
          Exercises keep you strong. {name} is one of the best exercises to target your {target}. It will help your mood and gain energy. 
        </Typography>

        {/* Map extraDetail */}
        {extraDetail.map((item) => (
          <Stack 
            key={item.name}
            direction='row'
            gap='24px'
            alignItems='center'
          >
            <Button
              sx={{
                background: '#fff2db',
                borderRadius: '50%',
                width: '100px',
                height: '100px'
              }}
            >
              <img src={item.icon} alt={item.name} width='50px' height='50px' />
            </Button>

            <Typography variant='h5' textTransform='capitalize'>
              {item.name}
            </Typography>

          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}
