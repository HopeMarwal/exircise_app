//MUI
import { Stack } from "@mui/system"
//Router
import { Link } from 'react-router-dom'
//Logo
import Logo from '../assets/images/Logo.png'
function Navbar() {
  return (
    <Stack 
      direction='row'
      justifyContent='space-around'
      px='20px'
      sx={{
        gap: { sm: '122px', xs: '40px'},
        mt: { sm: '42px', xs: '20px'},
        justifyContent: 'none'
      }}
    >
      {/* Logo */}
      <Link>
        <img 
          src={Logo} 
          alt='logo exercise app'
          style={{
            width: '48px',
            height: '48px',
            margin: '0 20px'
          }}
        />
      </Link>

      {/* Nav links */}
      <Stack 
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
      >
        <Link 
          to='/' 
          style={{ 
            textDecoration: 'none',
            color: '#3a1212',
            borderBottom: '3px solid #ff2625'
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3a1212'}}>
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar

