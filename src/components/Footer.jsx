import { Box, Stack, Typography } from "@mui/material"
import Logo from '../assets/images/Logo-1.png'

export default function Footer() {
  return (
    <Box mt='70px' bgcolor='#fff3f4'>
      <Stack
        gap='40px'
        alignItems='center'
        px='40px'
        pt='24px'
      >
        <img src={Logo} width='200px' height='40px' alt='logo' />
        <Typography variant='h5' pb='40px' mt='20px'>
          2023 &copy; Exercise GoldsGym
        </Typography>
      </Stack>
    </Box>
  )
}
