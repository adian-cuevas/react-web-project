import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { LoginDialog, RegisterDialog } from '../../components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../../models/User'

// const url = process.env.BASE_URL
export const RootPage = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  const [openRegisterDialog, setOpenRegisterDialog] = useState(false)
  const navigate = useNavigate()

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true)
  }
  const handleOpenRegisterDialog = () => {
    setOpenRegisterDialog(true)
  }
  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false)
  }
  const handleCloseRegisterDialog = () => {
    setOpenRegisterDialog(false)
  }
  const handleLogin = (user: User) => {
    fetch(`http://localhost:1337/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (!data?.error) {
          handleCloseLoginDialog()
          navigate('/calendario')
        }
      })
      .catch((error) => console.error(error))
  }
  const handleRegister = (user: User) => {
    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
    handleCloseRegisterDialog()
  }

  return (
    <Box
      sx={{
        background: 'linear-gradient(94deg, #061341 14.22%, #262ad8 92.85%)',
        height: '100vh',
        width: '100vw',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Grid
        sx={{
          width: '273px',
          position: 'absolute',
          left: '55px',
          top: '96px',
        }}
        spacing={2}
        container
        direction={'column'}
      >
        <Grid item>
          <Typography
            variant='h3'
            color={'white'}
          >
            K-lendar
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant='subtitle2'
            color={'white'}
          >
            Calendario para modulo de Noswork
          </Typography>
        </Grid>
        <Grid item>
          <Stack
            direction={'row'}
            spacing={2}
          >
            <Button
              variant='contained'
              onClick={handleOpenLoginDialog}
            >
              Login
            </Button>
            <Button
              variant='outlined'
              onClick={handleOpenRegisterDialog}
            >
              Registrar
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Box sx={{ position: 'absolute', bottom: '-15px', right: '0px' }}>
        <img
          src='/Responsive Calendar.png'
          alt='Foto de Calendario'
        />
      </Box>
      <Box sx={{ position: 'absolute', top: '40px', right: '50px' }}>
        <img
          src='/Frame 65.png'
          alt='Calendario pequeño'
        />
      </Box>
      <Box sx={{ position: 'absolute', bottom: '-10px', right: '0px' }}>
        <img
          src='/Responsive Calendar (2).png'
          alt='Calendario pequeño'
        />
      </Box>
      <Box sx={{ position: 'absolute', bottom: '-10px', left: '50px' }}>
        <img
          src='/Responsive Calendar (1).png'
          alt='Calendario pequeño'
        />
      </Box>
      {openLoginDialog && (
        <LoginDialog
          handleLogin={handleLogin}
          handleClose={handleCloseLoginDialog}
        />
      )}
      {openRegisterDialog && (
        <RegisterDialog
          handleRegister={handleRegister}
          handleClose={handleCloseRegisterDialog}
        />
      )}
    </Box>
  )
}
