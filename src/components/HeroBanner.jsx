import React from 'react';
//MUI
import  { Box, Stack, Typography, Button } from '@mui/material';
//Img
import HeroBannerImage from '../assets/images/banner.png'
import { padding } from '@mui/system';

export default function HeroBanner() {
  return (
    <Box
      position='relative'
      p='20px'
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' }
      }}
    >
      <Typography 
        color='#ff2625'
        fontWeight='600'
        fontSize='26px'
      >
        Fitness Club
      </Typography>

      <Typography
        fontWeight='700'
        mb='23px'
        mt='30px'
        sx={{
          fontSize: { lg: '44px', xs: '40px'}
        }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography
        fontSize='22px'
        lineHeight='35px'
        mb={4}
      >
        Check out the most effective exercises
      </Typography>

      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{
          backgroundColor: '#ff2625',
          padding: '10px'
        }}
      >
        Explore Exercises
      </Button>
      
      <img src={HeroBannerImage} alt='Banner Exercise' className='hero-banner-img'/>

      <Typography
        fontWeight={600}
        color='#ff2625'
        fontSize='200px'
        sx={{
          position: 'relative',
          zIndex: -1,
          opacity: 0.1,
          display: { lg: 'block', xs: 'none'}
        }}
      >
        Exercise
      </Typography>
    </Box>
  )
}

